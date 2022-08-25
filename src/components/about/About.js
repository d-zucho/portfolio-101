import './about.style.css'
import AboutMe from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          {/* About Me Image */}
          <div className='about__me-img'>
            <img src={AboutMe} alt='About Me' />
          </div>
        </div>

        {/* About me Info */}
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>

            <article className='about__card'>
              <FiUser className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>80+ Completed </small>
            </article>
          </div>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum a
            consequatur sed ipsum numquam veniam exercitationem eveniet
            mollitia, sint, ex distinctio fugiat unde. Nam quibusdam explicabo
            sed dolores ab aspernatur.
          </p>

          <a href='#contact' className='btn btn-primary'>
            Lets talk!
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
