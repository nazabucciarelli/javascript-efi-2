import { Button } from "@mui/material";
import './NotFound.css'
import notFound from "./notfound.png"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../contexts/DarkThemeContext";

export default function NotFound() {
    const { darkMode } = useContext(DarkModeContext)
    return (
        <div className={darkMode ? "container darkBackground" : "container"}>
            <img alt="404 not found" src={notFound}></img>
            <Link to="/home">
                <Button variant={darkMode ? "contained" : "outlined"}>Return to home</Button>
            </Link>
        </div>
    )
}