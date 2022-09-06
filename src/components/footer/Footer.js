import React from 'react'
import { SectionFooter } from './Footer.styled'
import { FaHospitalUser, FaTelegramPlane, FaFacebookSquare, FaGithubSquare, FaInstagram } from "react-icons/fa";
import { Link } from 'gatsby';

export default function Footer() {

  const resetFormulario = e => {
    e.preventDefault();
  }

  return (
    <SectionFooter>
      <article className='gridFooter'>
        <div className="info">
          <div className="gridInfoFooter">
            <div className="logoInfoP">
              <h2>
                <FaHospitalUser />{' '}
                Perfect house
              </h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ab.</p>
            </div>
            <div className="gridEnlacesContacttos">
              <div className="iconsLins">
                <FaFacebookSquare />
                <FaGithubSquare />
                <FaInstagram />
              </div>
              <div className='formFooter'>
                <form onSubmit={resetFormulario}>
                  <label htmlFor="emainSend">Subscribe to our newsletter</label>
                  <div className="flexFormulario">
                    <input type="email" name="email" id="emainSend" placeholder='send email' />
                    <button type="submit">
                      <FaTelegramPlane />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="linksFooter">
          <div className="sublinks">
            <h3>sub - informacion</h3>
            <Link to='#'>Documentation</Link>
            <Link to='#'>Tutorial</Link>
            <Link to='#'>How-To Guides</Link>
            <Link to='#'>Reference Guides</Link>
            <Link to='#'>Conceptual Guides</Link>
          </div>
          <div className="sublinks">
            <h3>sub - informacion</h3>
            <Link to='#'>Support</Link>
            <Link to='#'>Integrations</Link>
            <Link to='#'>Guides</Link>
            <Link to='#'>Reference Guides</Link>
            <Link to='#'>Pricing</Link>
          </div>
          <div className="sublinks">
            <h3>sub - informacion</h3>
            <Link to='#'>Comparison</Link>
            <Link to='#'>Contributing</Link>
            <Link to='#'>Swag Store</Link>
            <Link to='#'>Code of Conduct</Link>
            <Link to='#'>Style Guide</Link>
          </div>
        </div>
        <div className="derechos">
          <div className="gridDerech">
            <div>
              <Link to='#'>Accessibility Statement</Link>
              <Link to='#'>Brand Guidelines</Link>
            </div>
            <div>
              <Link to='#'>Terms of Use</Link>
              <Link to='#'>Privacy Policy</Link>
            </div>
            <span>© 2022 SuperationBn, Inc.</span>
          </div>
        </div>
      </article>
    </SectionFooter>
  )
}
