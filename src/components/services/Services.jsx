import React from 'react'
import './services.css'
import { FaCheckDouble } from "react-icons/fa";

const Services = () => {
  return (
    <section id='services'>
      <h5>Let's help each other</h5>
      <h2>Services</h2>
      <div className="container services__container">

        {/* PRODUCTION */}
        <article className='service'>
          <div className='service__head'>
            <h3>PRODUCTION</h3>
          </div>

          <ul className='service__list'>
            <li><FaCheckDouble className='service__list-icon'/>
            <p>Fast & quality Music Production at the highest industry level.</p>
            </li>
            <li><FaCheckDouble className='service__list-icon'/>
            <p>Fullstack Web & App Development.</p>
            </li>
            <li><FaCheckDouble className='service__list-icon'/>
            <p>Web3 Asset production via the fastest tokenizer in the world.</p>
            </li>
            <li><FaCheckDouble className='service__list-icon'/>
            <p>Screenwriting, Book & Series Production.</p>
            </li>
            <li><FaCheckDouble className='service__list-icon'/>
            <p>Team building from scratch, or from anywhere on your journey.</p>
            </li>
          </ul>
        </article>

        {/* MARKETING */}
        <article className='service'>
          <div className='service__head'>
            <h3>MARKETING</h3>
          </div>

          <ul className='service__list'>
            <li><FaCheckDouble className='service__list-icon'/>
            <p>Value handling. Identifying the pain point of your community.</p>
            </li>
            <li><FaCheckDouble className='service__list-icon'/>
            <p>Caption optimization across social platforms (SEO).</p>
            </li>
            <li><FaCheckDouble className='service__list-icon'/>
            <p>Maximize your facebook ad reach (150M impressions).</p>
            </li>
            <li><FaCheckDouble className='service__list-icon'/>
            <p>Session music: Feel free to share what we did. I will too.</p>
            </li>
            <li><FaCheckDouble className='service__list-icon'/>
            <p>Interviews. Podcasts are strange, but if you're cool it's cool.</p>
            </li>
          </ul>
        </article>
        
        {/* MONETIZATION */}
        <article className='service'>
          <div className='service__head'>
            <h3>MONETIZATION</h3>
          </div>

          <ul className='service__list'>
            <li><FaCheckDouble className='service__list-icon'/>
            <p>Using key-words to maximize facebook ad ROI (3M profit).</p>
            </li>
            <li><FaCheckDouble className='service__list-icon'/>
            <p>Identifying the two sided market to your business or brand.</p>
            </li>
            <li><FaCheckDouble className='service__list-icon'/>
            <p>Fundraising via launchpads, private investors, & more.</p>
            </li>
            <li><FaCheckDouble className='service__list-icon'/>
            <p>Sync & other music deals. If we make a beat together, we split.</p>
            </li>
            <li><FaCheckDouble className='service__list-icon'/>
            <p>Tokenization. From making a digital asset, to publicly listing it.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services