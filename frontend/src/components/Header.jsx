import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import {NavBar} from '../components/NavBar';




export function Header(){

 return (
    <header className="flex h-36 items-center px-10"> 
        <Link to="/">
            <img className="h-24 w-48" src={logo} alt="Logo" /> 
        </Link>
        <NavBar />
    </header>
 )
}
