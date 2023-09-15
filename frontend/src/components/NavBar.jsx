import React from 'react'
import { useAuth } from '../contexts/AuthContext'; 

function NavBar() {
  const { user, setUser } = useAuth();

  return (
    <>
        <a className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer" href="/register">Registro</a>

        <a className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer" href="/login">Login</a>
 
        <a className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer" href="/">Home</a>
    </>
  )
}

export default NavBar