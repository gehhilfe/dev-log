import { graphql } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import BlogEntry from "../components/blog/blog-entry"
import Layout from "../components/layout"

const IndexPage = ({data}) => {
    return (
        <Layout>
            <Helmet>
                <title>Gehhilfe DevLog</title>
            </Helmet>
            {data.allMdx.nodes.map(it => (
                <BlogEntry content={it} key={it.slug} />
            ))}
        </Layout>
    )
}

export const query = graphql`
  {
    allMdx(limit: 5, sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {type: {eq: "blog"}}}) {
      nodes {
        frontmatter {
          date(formatString: "YYYY/MM/DD")
          title
          tags
          hero_image_alt
          hero_image_credit_link
          hero_image_credit_text
          hero_image {
          childImageSharp {
              gatsbyImageData(width: 1000, placeholder: BLURRED, outputPixelDensities: 2)
          }
        }
        }
        id
        slug
        body
        excerpt(truncate: false, pruneLength: 300)
      }
    }
  }
`

export default IndexPage