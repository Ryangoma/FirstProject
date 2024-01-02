import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/tokenizer.png'
import IMG2 from '../../assets/mockupp-min.png'
import IMG3 from '../../assets/dashboard.png'
import IMG4 from '../../assets/ethos-mockup.png'
import IMG5 from '../../assets/mockup-care.png'
import IMG6 from '../../assets/Freedom.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Tokenize anything in 1 minute',
    link: 'https://launchpad.osisplatform.com/',
    demo: 'contact@osis.world',
  },
  {
    id: 2,
    image: IMG2,
    title: 'OSIS Wallet in Progress',
    link: 'https://osisplatform.com/',
    demo: 'contact@osis.world',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Manage all your Web3 assets',
    link: 'https://osisplatform.com/',
    demo: 'contact@osis.world',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Imagine getting paid to host your own party?',
    link: 'https://ethos.city/',
    demo: 'admin@ethos.city',
  },
  {
    id: 5,
    image: IMG5,
    title: 'We have the partnerships.',
    link: 'https://coincaregroup.com',
    demo: 'apply@coincaregroup.com',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Music is Life. I\'m nothing without it.',
    link: 'https://instagram.com/9goma',
    demo: 'contact@chrisgoma.com',
  },
] 
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Recent Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
       {
        data.map(({id, image, title, link, demo}) => {
          return(
            <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={link} className='btn' target='_blank'>Interested</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Let's Talk</a>
          </div>
        </article>
          )
        })
       } 
      </div>
    </section>
  )
}

export default Portfolio