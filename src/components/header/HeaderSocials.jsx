import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/chrisrtabaro" target="_blank"><FaLinkedin/></a>
        <a href="https://instagram.com/9goma" target='_blank'><FaInstagram/></a>
        <a href="https://github.com/ryangoma" target='_blank'><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials