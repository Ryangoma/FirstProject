import React from 'react'
import './experience.css'
import { FaCircleCheck } from "react-icons/fa6";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>Experience</h2>

      <div className="container experience__container">
        <div className="experience__entertainment">
          <h3>Business Man</h3>
            <div className="experience__content">
            <article className='experience__details'>
              <FaCircleCheck className="experience__details-icon" />
              <div>
                <h4>Marketing</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            

            <article className='experience__details'>
              <FaCircleCheck className="experience__details-icon"/>
              <div>
                <h4>Leadership</h4>
                <small className='text-light'>Experienced</small>
              </div>
              
              
            </article>

            <article className='experience__details'>
              <FaCircleCheck className="experience__details-icon"/>
              <div>
                <h4>Entertainment</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaCircleCheck className="experience__details-icon"/>
              <div>
                <h4>Programming</h4>
                <small className='text-light'>Intermediate</small>
              </div>    
            </article>

            <article className='experience__details'>
              <FaCircleCheck className="experience__details-icon"/>
              <div>
                <h4>Author</h4>
                <small className='text-light'>Intermediate</small>
              </div> 
            </article>

            <article className='experience__details'>
              <FaCircleCheck className="experience__details-icon"/>
              <div>
                <h4>Legal</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            </div>
          </div>

          {/* DEV EXPERIENCE */}

          <div className="experience__business">
          <h3>Fullstack Developer</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaCircleCheck className="experience__details-icon"/>
              <div>
                <h4>HTML/CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaCircleCheck className="experience__details-icon"/>
              <div>
                <h4>React/JS</h4>
                <small className='text-light'>Experienced</small>
              </div>      
            </article>

            <article className='experience__details'>
              <FaCircleCheck className="experience__details-icon"/>
              <div>
                <h4>C/C++</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaCircleCheck className="experience__details-icon"/>
              <div>
                <h4>Typescript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaCircleCheck className="experience__details-icon"/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaCircleCheck className="experience__details-icon"/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            </div>
        </div>
      </div>
    </section>

  )
}

export default Experience