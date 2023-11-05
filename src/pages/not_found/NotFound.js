import { Button } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import './NotFound.css'
import notFound from "./notfound.png"
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <>
            <Navbar></Navbar>
            <div className="container">
                <img alt="404 not found" src={notFound}></img>
                <Link to="/home">
                    <Button variant="contained">Turn back to home</Button>
                </Link>
            </div>
        </>

    )
}