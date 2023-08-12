import React from 'react'
import './Navbar.css'
import revb from './revb.svg'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbarr">
    <div className="container-fluid">
      <a className="navbar-brand navvi" href="https://credenz.in" style={{padding: 0}}
        ><img src={revb} alt="Clash Logo" className='logo'
      /></a>

      <a
        className="navbar-brand navvi pisblogo"
        href="https://pictieee.in"
       
        style={{padding: 0, marginLeft : 20}}
        ><img src="images/pisblogo.png" alt="PISBLogo" height="30px"
      /></a>
    </div>
  </nav>

    </>
    
  )
}
