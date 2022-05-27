import React from 'react'
import { FiGithub } from 'react-icons/fi'
import './styles.scss'

function Footer() {
  return (
    <a href='https://github.com/jrodriguezo' className='social-media'>
      <FiGithub size={20} color='white' />
      <span>jrodriguezo</span>
    </a>
  )
}

export default Footer
