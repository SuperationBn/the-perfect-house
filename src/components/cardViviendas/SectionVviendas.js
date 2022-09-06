import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import { SectionViviendasGrid } from './SectionViviendas.styled'
import Img from "gatsby-image"

export default function SectionVviendas() {

  const data = useStaticQuery(graphql`
    query DatosViviendas {
      viviendas: allMarkdownRemark {
        nodes {
          frontmatter {
            slug
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
    }
  `);

  // console.log(data.viviendas.nodes[0].frontmatter);

  return (
    <SectionViviendasGrid>
      <article className="gridCardViviendas">
        {data.viviendas.nodes.length > 0 && data.viviendas.nodes.map((datos, idx) => {
          return (
            <Link to={'/houses/' + datos.frontmatter.slug} key={idx} className="cardContainer" >
              <div className='imgCardBox'>
                <Img className="imgCard" fluid={datos.frontmatter.image["childImageSharp"].fluid} />
              </div>
              <div className='textCardBox'>
                <h3>{datos.frontmatter.title}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis libero totam provident enim nisi animi, eveniet molestias? Ducimus, veritatis itaque?</p>
              </div>
            </Link>
          )
        })}
      </article>
    </SectionViviendasGrid>
  )
}
