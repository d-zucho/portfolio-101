import './footer.style.css'
import { FaFacebookSquare } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer'>
      <a className='footer__logo' href='#home'>
        D_Libor
      </a>

      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#testimonials'>Testimonials</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com' target='_blank' rel='noreferrer'>
          <FaFacebookSquare />
        </a>
        <a href='https://instagram.com' target='_blank' rel='noreferrer'>
          <FiInstagram />
        </a>
        <a href='https://twitter.com' target='_blank' rel='noreferrer'>
          <FaTwitter />
        </a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; D_Libor. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
