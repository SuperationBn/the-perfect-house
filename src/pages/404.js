import { Link } from 'gatsby'
import React from 'react'

export default function ErrorPage() {
  return (
    <div>
      <h1>lo sentimos, esta pagina no existe</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, soluta.</p>
      <Link to='/'>go to home</Link>
    </div>
  )
}
