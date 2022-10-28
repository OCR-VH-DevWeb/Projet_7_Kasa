import React from 'react'
import logo from '../../assets/Logowhite.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logo} alt="Logo de Kasa"></img>
      </div>
      <p className="footer__mention">&copy; 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
