import './nav.style.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { GiOpenBook } from 'react-icons/gi'

import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      {/** Home */}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        href='#'
        className={activeNav === '#' ? 'active' : ''}
        onClick={() => setActiveNav('#')}>
        <AiOutlineHome />
      </a>

      {/** About */}
      <a
        href='#about'
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}>
        <AiOutlineUser />
      </a>

      {/** Experience */}
      <a
        href='#experience'
        className={activeNav === '#experience' ? 'active' : ''}
        onClick={() => setActiveNav('#experience')}>
        <BiBook />
      </a>

      {/** Services */}
      <a
        href='#services'
        className={activeNav === '#services' ? 'active' : ''}
        onClick={() => setActiveNav('#services')}>
        <RiServiceLine />
      </a>

      {/** Portfolio */}
      <a
        href='#portfolio'
        className={activeNav === '#portfolio' ? 'active' : ''}
        onClick={() => setActiveNav('#portfolio')}>
        <GiOpenBook />
      </a>

      {/** contact */}
      <a
        href='#contact'
        className={activeNav === '#contact' ? 'active' : ''}
        onClick={() => setActiveNav('#contact')}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  )
}

export default Nav
