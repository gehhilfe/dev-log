import { graphql } from "gatsby"
import Layout from "../layout"
import React from "react";
import BlogEntry from "./blog-entry";

const TagPage = ({ data }) => {
    return (
        <Layout>
            {data.allMdx.nodes.map(it => (
                <BlogEntry content={it} />
            ))}
        </Layout>
    )
}

export const query = graphql`
  query ($tag: String) {
    allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {tags: {eq: $tag}}}) {
          nodes {
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
                hero_image_alt
                hero_image_credit_link
                hero_image_credit_text
                hero_image {
                  childImageSharp {
                    gatsbyImageData(width: 1000, placeholder: BLURRED, outputPixelDensities: 2)
                  }
                }
                tags
              }
              body
              slug
        }
      }
  }`


  
export default TagPage