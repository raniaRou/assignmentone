import React from 'react'
import { Link , NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
   <>
<nav className={` ${"navbar navbar-expand-lg position-fixed start-0 end-0 top-0 "} ${styles.bgNav}`}>
  <div className="container">
    <NavLink className="navbar-brand text-uppercase text-white bold" to={'/Home'}>Start Framework</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link  text-uppercase text-white bold " aria-current="page" to={'/About'}>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-uppercase text-white bold " to={'/Portfolio'}>Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-uppercase text-white bold" to={'/Contact'}>contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

   
   
   </>
  )
}
