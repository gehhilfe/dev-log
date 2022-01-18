const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/components/blog/blog-post.tsx`)
  const result = await graphql(`
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

  result.data.allMdx.nodes.forEach(edge => {
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