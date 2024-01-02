import React from 'react'
import './about.css'
import ME from '../../assets/Tortuga.jpg'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { FaRegFolderOpen } from "react-icons/fa";

const About = () => {
  return (
    <section id='about'>
      <h5>Some things</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">

        <div className="about__me-image">
              <img src={ME} alt="About Section" />
          </div> 
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>17+ Years. 50K+ hours</small>
            </article>
           
            <article className='about__card'>
              <FiUsers className='about__icon'/>
            <h5>Reach</h5>
            <small>100M+ impressions</small>
            </article>
            
            <article className='about__card'>
              <FaRegFolderOpen className='about__icon'/>
            <h5>Projects</h5>
            <small>500+ completed projects</small>
            </article>
          </div>       
          <p>
          My childhood ended at 12. That's when I started playing music
          professionally. Doing paid gigs. Session work etc... At 13, I had received my first sponsorship with
          a music company named Washburn. at 20, my first recording contract.
          At 22, started my first tech company. At 23, raised our first Million dollars.
          
          Since then, life has been nothing short of a dream-like journey. 
          I'm 28, but I'd be lying if I said it didn't feel like I was a kid again... 
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About