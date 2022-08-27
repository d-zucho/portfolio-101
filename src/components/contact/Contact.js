import { useRef } from 'react'
import './contact.style.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
//? import for emailJS
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_fjfgjes',
      'template_ogx37qt',
      form.current,
      '8uR97h5zHGzqzhevP'
    )

    e.target.reset()
  }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          {/* email */}
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>email</h4>
            <h5>danny@gmail.com</h5>
            <a href='mailto:danny.nicodev@gmail.com'>Send a Messege</a>
          </article>

          {/* Messenger */}
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>danny_nicoDev</h5>
            <a href='https://facebook.com' target='_blank' rel='noreferrer'>
              Send a Message
            </a>
          </article>

          {/* Whatsapp */}
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>email</h4>
            <h5>+12345678</h5>
            <a
              href='https://api.whatsapp.com/send?phone=19494687544'
              target='_blank'
              rel='noreferrer'>
              Send a Message
            </a>
          </article>
        </div>

        {/* --- Form Start --- */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea
            placeholder='Enter your message...'
            name='message'
            rows='7'
            required></textarea>
          <button className='btn btn-primary'>Send a Message!</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
