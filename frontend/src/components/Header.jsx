import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import logo from "../assets/Logo.svg"
import whiteLogo from "../assets/whiteLogo.svg"
// import NavBar from "./NavBar2";

export function Header() {

 return (
    <header className="flex h-36 items-center px-10 md:bg-transparent bg-black"> 
        <Link to="/">
            <img className="h-24 w-48 md:block hidden" src={logo} alt="Logo" /> 
            <img className="h-12 w-24 ml-44 md:hidden" src={whiteLogo} alt="Logo" />
        </Link>
        <NavBar />
    </header>
 )
}
