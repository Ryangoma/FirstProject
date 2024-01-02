import React from 'react'
import './nav.css'
import { MdOutlineHome } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { GrWorkshop } from "react-icons/gr";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { GrContact } from "react-icons/gr";
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><MdOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><IoBookOutline/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GrWorkshop/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><LiaHandsHelpingSolid/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><GrContact/></a>
    </nav>
  )
}

export default Nav