import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import logo from "../assets/Logo.svg"
import NavBar2 from "./NavBar2";
import Axios from 'axios';

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
