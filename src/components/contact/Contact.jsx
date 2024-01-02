import React from 'react'
import './contact.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { TbBrandTelegram } from "react-icons/tb";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h0df0s4', 'template_6j720nv', form.current, 'F5-7spMiZCbpbriXU');
    
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className='contact__option'>
        <MdOutlineMailOutline className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>contact@chrisgoma.com</h5>
          <a href="mailto:contact@chrisgoma.com" target='_blank'>Send Message</a>
        </article>
        <article className='contact__option'>
        <RiMessengerLine className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>Chris Goma</h5>
          <a href="https://m.me/9goma" target='_blank'>Send Message</a>
        </article>
        <article className='contact__option'>
        <TbBrandTelegram className='contact__option-icon'/>
          <h4>Telegram</h4>
          <h5>@christabaro</h5>
          <a href="https://t.me/christabaro" target='_blank'>Send Message</a>
        </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact