import { Link } from 'gatsby'
import React, { useState } from 'react'
import { SectionHeader } from './header.styled'
// import styles from "../../styles/header.module.css"
import { BsTextParagraph, BsXLg } from "react-icons/bs";
import { FcHome, FcFactory } from "react-icons/fc";

export default function HeaderTag() {

  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <SectionHeader>
      <div className='logo'>
        <h1>
          <Link to="/">Perfect house</Link>
        </h1>
      </div>
      <nav className={`navbar ${showMenu ? 'activeNav' : ''}`}>
        <Link onClick={handleMenu} to="/">
          <FcHome className="iconsLinksHeader" /> {' '}
          home
          <div className="efectHover"></div>
        </Link>
        <Link onClick={handleMenu} to="/housing">
          <FcFactory className="iconsLinksHeader" /> {' '}
          housing
          <div className="efectHover"></div>

        </Link>
      </nav>
      <div className="iconsNav">
        {showMenu ?
          (
            <BsXLg onClick={handleMenu} />

          ) : (
            <BsTextParagraph onClick={handleMenu} />
          )
        }
      </div>
    </SectionHeader>
  )
}
