const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/components/blog/blog-post.tsx`)
  const tagPageTemplate = path.resolve('src/components/blog/tag-page.tsx')

  const blogEntries = await graphql(`
    query {
        allMdx(filter: {frontmatter: {type: {eq: "blog"}}}) {
          nodes {
            slug
            frontmatter {
                title
              }
          }
        }
      }      
  `)

  const tags = await graphql(`
  {
    allMdx {
      nodes {
        frontmatter {
          tags
        }
      }
    }
  }  
  `)

  tags.data.allMdx.nodes.forEach(it => it.frontmatter.tags && it.frontmatter.tags.forEach(tag => {
    createPage({
      path: `blog/tag/${tag}`,
      component: tagPageTemplate,
      context: {
        tag: tag,
      }
    })
  }))

  blogEntries.data.allMdx.nodes.forEach(edge => {
    createPage({
      path: `blog/${edge.slug}`,
      component: blogPostTemplate,
      context: {
        title: edge.frontmatter.title,
        slug: edge.slug
      },
    })
  })
}