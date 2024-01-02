import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Portfolio.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hey. I'm</h5>
        <h1>Chris Goma</h1>
        <h5 className="text-light">Innovator</h5>
        <CTA/>
        <HeaderSocials/>
      </div>
      <div className="me">
        <img src={ME} alt="me" />
    </div>

    <a href="#contact" className='scroll__down'>Scroll Down</a>
    </header>
  )
}

export default Header