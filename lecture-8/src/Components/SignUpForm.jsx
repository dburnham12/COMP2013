import { useState } from "react";

export default function SignUpForm() {
    // State and initial state
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleOnChange = (e) => {
        setUser((prevUser) => {
            return {
                ...prevUser,
                [e.target.name]: e.target.value,
            };
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        alert(`Form submitted\nUsername: ${user.username}\nPassword: ${user.password}\nEmail: ${user.email}`);

        setUser({
            username: "",
            password: "",
            email: "",
        });
    };

    return (
        <div>
            <form action="" onSubmit={handleOnSubmit}>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" id="username" value={user.username} onChange={handleOnChange} />
                <br />
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" value={user.password} onChange={handleOnChange} />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" value={user.email} onChange={handleOnChange} />
                <br />
                <input type="submit" name="Submit" />
            </form>
        </div>
    );
}
