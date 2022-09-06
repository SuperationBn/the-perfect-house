import { graphql, Link, StaticQuery } from 'gatsby';
import React, { Fragment } from 'react'
import { SerctionServices } from './Services.styled'
import Img from "gatsby-image"
import { FcApproval } from "react-icons/fc";


function Services() {
  return (

    <StaticQuery
      query={query}
      render={data => (
        <Fragment>
          <SerctionServices>
            <article className='gridServices'>
              <div className="imgServicesContent">
                <Img className="imgServices" fluid={data.file.childImageSharp.fluid} />
              </div>
              <div className="textServicesContent">
                <h2>we offer you different services, and we help you to choose the best one for you.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perferendis possimus totam quos eveniet omnis eum, iure earum sint sapiente saepe necessitatibus ut quibusdam, non nemo laudantium voluptatem expedita? Excepturi!</p>
                <div className="servicesInfo">
                  <h4><FcApproval /> comfort</h4>
                  <h4><FcApproval /> communication</h4>
                  <h4><FcApproval /> security</h4>
                  <h4><FcApproval /> wellness</h4>
                  <h4><FcApproval /> refund</h4>
                  <h4><FcApproval /> contracts</h4>
                </div>
                <Link to='/housing'>view properties</Link>
              </div>
            </article>
          </SerctionServices>
        </Fragment>
      )}
    />
  )
}

const query = graphql`
  query MyImgServices {
    file(relativePath: {eq: "NewHouse.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Services;