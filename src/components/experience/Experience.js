import './experience.style.css'
import { BsBookmarkCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        {/* --- Frontend --- */}
        <div className='experience__frontent'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsBookmarkCheckFill className='experience__details-icon' />
              <div>
                <h4 className='skill'>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheckFill className='experience__details-icon' />
              <div>
                <h4 className='skill'>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheckFill className='experience__details-icon' />
              <div>
                <h4 className='skill'>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheckFill className='experience__details-icon' />
              <div>
                <h4 className='skill'>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheckFill className='experience__details-icon' />
              <div>
                <h4 className='skill'>Tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheckFill className='experience__details-icon' />
              <div>
                <h4 className='skill'>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* --- Backend --- */}
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsBookmarkCheckFill className='experience__details-icon' />
              <div>
                <h4 className='skill'>Node.js</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheckFill className='experience__details-icon' />
              <div>
                <h4 className='skill'>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheckFill className='experience__details-icon' />
              <div>
                <h4 className='skill'>PHP</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheckFill className='experience__details-icon' />
              <div>
                <h4 className='skill'>MySQL</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsBookmarkCheckFill className='experience__details-icon' />
              <div>
                <h4 className='skill'>Python</h4>
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
