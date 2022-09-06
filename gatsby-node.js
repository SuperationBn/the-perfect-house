const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query HouseData {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: '/houses/' + node.frontmatter.slug,
      component: path.resolve('./src/templates/house-informacion.js'),
      context: { slug: node.frontmatter.slug }

    })
  })

}