import './contact.style.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <div className='email__container'>
              <MdOutlineEmail />
              <h4>email</h4>
            </div>
            <h5>dummyemail@gmail.com</h5>
            <a href='mailto:danny.nicodev@gmail.com'>Send a Messege</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>danny_nicoDev</h5>
            <a href='https://facebook.com' target='_blank' rel='noreferrer'>
              Send a Message
            </a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp />
            <h4>email</h4>
            <h5>+1-234-5678</h5>
            <a
              href='https://api.whatsapp.com/send?phone=19494687544'
              target='_blank'
              rel='noreferrer'>
              Send a Message
            </a>
          </article>
        </div>
        <div className='contact__form'>
          <form action=''>
            <input
              type='text'
              name='name'
              placeholder='Your Full Name'
              required
            />
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              required
            />
            <textarea name='message' rows='7' required></textarea>
            <button className='btn btn-primary'>Send a Message!</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
