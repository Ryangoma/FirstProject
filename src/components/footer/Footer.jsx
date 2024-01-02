import React from 'react'
import './footer.css'
import { FaDiscord } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Chris Goma</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      
        <a href="https://instagram.com/9goma"><FaInstagram /></a>
        <a href="https://twitter.com/osis_world"><FiTwitter /></a>
        <a href="https://discord.gg/5SzDWCU3"><FaDiscord /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Chris Goma. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer