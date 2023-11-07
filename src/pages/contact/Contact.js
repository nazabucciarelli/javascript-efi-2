import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from '../../contexts/LoginContext';
import { useContext } from 'react';
import ContactForm from "../../components/contact_form/ContactForm"
import Navbar from "../../components/navbar/Navbar"

export default function Contact(){
    const navigate = useNavigate();
    const {logged, setLogged} = useContext(LoginContext)

    useEffect(() => {
        (!logged && navigate("/"))
        console.log("Use state de Contact. Logeado?:",logged)
    }, [logged,navigate]);

    return (<>
                <Navbar></Navbar>
                <ContactForm></ContactForm>
            </>)
}