import { Link } from "react-router-dom";

export default function NotAuthorizd() {
    return (
        <div>
            <h1>Error 403: User not authorized to see this page</h1>
            <Link to={"/login"}>Please login first</Link>
        </div>
    );
}
