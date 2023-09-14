import React from 'react'
import { useAuth } from '../contexts/AuthContext'; 

function NavBar() {
  const { user, setUser } = useAuth();
  
  return (
    <div>Soy el NavBar</div>
  )
}

export default NavBar