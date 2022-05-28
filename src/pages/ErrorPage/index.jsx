import React from 'react'
import { Link } from 'wouter'
import './styles.scss'

function ErrorPage() {
  return (
    <div className='error-page'>
      <h1>Sorry, we can't find that page! Don't worry though, everything is under control.</h1>
      <Link to='/'>Go home</Link>
    </div>
  )
}

export default ErrorPage
