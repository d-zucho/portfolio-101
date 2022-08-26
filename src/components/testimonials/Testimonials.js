import './testimonials.style.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, similique atque assumenda aliquam unde repudiandae blanditiis itaque dolore autem deserunt.',
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, similique atque assumenda aliquam unde repudiandae blanditiis itaque dolore autem deserunt.',
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, similique atque assumenda aliquam unde repudiandae blanditiis itaque dolore autem deserunt.',
  },
  {
    avatar: AVTR4,
    name: 'Lesley Ormani',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, similique atque assumenda aliquam unde repudiandae blanditiis itaque dolore autem deserunt.',
  },
]

const Testimonials = () => {
  return (
    <section>
      <h5>Review from Client</h5>
      <h2>Testimonials</h2>

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className='container testimonials__container'>
        {data.map(({ avatar, name, review }) => (
          <SwiperSlide key={name} className='testimonial'>
            <div className='client__avatar'>
              <img src={avatar} alt={name} />
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials
