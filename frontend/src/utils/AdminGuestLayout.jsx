import React from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../assets/LogoWhite.svg'

function AdminGuestLayout() {
  return (
    <>
    	<div className='flex'>
        <div className='bg-purple min-h-screen w-[20%]'>
          <img src={Logo} alt='Logo Nox CR' className='w-3/4 pt-10 pl-5'></img>
        </div>
        <main className='align-center w-3/4'>
            <Outlet />
        </main>
		  </div>

    </>
  )
}

export default AdminGuestLayout