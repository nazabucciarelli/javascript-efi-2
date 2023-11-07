import { Button } from "@mui/material";
import './NotFound.css'
import notFound from "./notfound.png"
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <>
            <div className="container">
                <img alt="404 not found" src={notFound}></img>
                <Link to="/home">
                    <Button variant="contained">Return to home</Button>
                </Link>
            </div>
        </>
    )
}