import { graphql, Link } from 'gatsby'
import React from 'react'
// import InformationHouse from '../components/InformacionHouse/InformationHouse'
import { SectionHouseInformationStyled } from '../components/InformacionHouse/InformationHouse.styled';
import Layout from "../components/Layout"
// import { Link } from 'gatsby';
import Img from "gatsby-image"
import { FcPlus } from "react-icons/fc";


export default function HouseInformacion({ data }) {

  const { html } = data.markdownRemark;
  const {
    bathrooms,
    bedrooms,
    county,
    price,
    rawAddress,
    state,
    title } = data.markdownRemark.frontmatter;

  const { fluid } = data.markdownRemark.frontmatter.image.childImageSharp;

  return (
    <Layout>
      <SectionHouseInformationStyled>
        <article className='gridHouseInfo'>
          <Link className='goBack' to='/housing'>go to back</Link>
          <div className="imgBox">
            <Img className='imgInfoHouse' fluid={fluid} />
          </div>
          <div className="textInfoHouseBox">
            <div className="textBox">
              <h2>{title}</h2>
              <h3>County: {county}</h3>
              <h4>State: {state}</h4>
            </div>
            <div className="caractiristicasHouse">
              <div className="moreInfo">
                <span>Bedrooms: </span>
                <p><FcPlus className='IconsInfo' /> {bedrooms}</p>
              </div>
              <div className="moreInfo">
                <span>Bathrooms: </span>
                <p><FcPlus className='IconsInfo' /> {bathrooms}</p>
              </div>
              <div className="moreInfo">
                <span>RawAddress: </span>
                <p><FcPlus className='IconsInfo' /> {rawAddress}</p>
              </div>
              <div className="moreInfo">
                <span>Price: </span>
                <p><FcPlus className='IconsInfo' /> {price}</p>
              </div>
            </div>
          </div>
          <div className='textMore' dangerouslySetInnerHTML={{ __html: html }}></div>
        </article>
      </SectionHouseInformationStyled>
    </Layout>
  )
}

export const data = graphql`
  query InfDetalles($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        bathrooms
        bedrooms
        county
        price
        rawAddress
        state
        title
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`