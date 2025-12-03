import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div>
            <h1>Home Page</h1>
            <br />
            <Link to="/register">Go To Register Page With A Link</Link>
            <br />
            <Link to="/login">Login Page</Link>
        </div>
    );
}
