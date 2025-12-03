import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function PrivatePage() {
    const [currentUser, setCurrentUser] = useState(() => {
        const jwtToken = Cookies.get("jwt-authorization");
        if (!jwtToken) {
            return "";
        }
        try {
            const decodedToken = jwtDecode(jwtToken);
            return decodedToken.username;
        } catch {
            return "";
        }
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser) navigate("/not-authorized");
    }, []);

    const handleLogout = () => {
        Cookies.remove("jwt-authorization");
        setCurrentUser("");
        navigate("/");
    };

    return (
        <div>
            <h1>This is a private page</h1>
            <h1>Welcome {currentUser} to the private page</h1>
            <button onClick={() => handleLogout()}>Logout</button>
        </div>
    );
}
