import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const [, setAuthenticated] = useState(null);

    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            setAuthenticated(loggedInUser);
        } else {
            navigate("/")
        }
    }, [navigate]);

    return (
        <div>
            <p>Home</p>
        </div>
    );
}