import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/Logo.png'

function Header() {
  return (
    <header className="header">
      <div className="header__image">
        <img src={logo} alt="logo Kasa"></img>
      </div>
      <nav className="header__nav">
        <ul className="header__menu">
          <li className="line">
            <NavLink to="/" end>
              Accueil
            </NavLink>
          </li>
          <li className="line">
            <NavLink to="/about">
              À propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
