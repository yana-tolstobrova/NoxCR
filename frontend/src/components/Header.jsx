import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import logo from "../assets/Logo.svg"

export function Header() {

 return (
    <header className="flex h-36 items-center ml-10 pr-10 md:bg-transparent bg-black"> 
        <Link to="/">
            <img className="h-24 w-48 md:block hidden" src={logo} alt="Logo" /> 
        </Link>
        <NavBar />
    </header>
 )
}
