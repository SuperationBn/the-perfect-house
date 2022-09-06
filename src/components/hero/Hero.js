// import { graphql } from 'gatsby'
import React, { Fragment } from 'react'
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"
// import { Fragment } from "react";
// import { render } from 'react-dom';
import { SectionHero } from './Hero.styled';

export default function Hero() {

  // console.log(data.file.childImageSharp.fluid);

  return (
    <StaticQuery
      query={query}
      render={data => (
        <Fragment>
          <SectionHero>
            <div className="textContainerHero">
              <h2>homes for sale, priced to fit your tassels</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam soluta nostrum similique totam at delectus assumenda debitis provident? Facilis, debitis?</p>
              <button>see more</button>
            </div>
            <div className="imgContainerHero">
              <Img className="imgHero" fluid={data.file.childImageSharp.fluid} />
            </div>
          </SectionHero>
        </Fragment>
      )}
    />
  )
}

// export const query = graphql`
//   query Images {
//     file(relativePath: {eq: "homeIlustration.png"}) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

const query = graphql`
  query MyQuery {
    file(relativePath: {eq: "homeIlustration.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }

`