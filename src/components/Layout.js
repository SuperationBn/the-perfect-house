// import { Link } from 'gatsby'
import React from 'react'
import "../styles/globalStyle.css"
import Footer from './footer/Footer'
import HeaderTag from './header/Header'

export default function Layout({ children }) {
  return (
    <>
      <HeaderTag />
      <main>{children}</main>
      <Footer />
    </>
  )
}
