import classNames from "classnames";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { Card } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import BlogEntry from "./blog-entry";

const BlogPost = ({ data }) => {
  const content = data.mdx
  return (
    <Layout>
      <Helmet>
        <title>{content.frontmatter.title}</title>
      </Helmet>
      <BlogEntry content={content} />
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}, fileAbsolutePath: {regex: "/.*blog\/.*/"}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData(height: 250, placeholder: BLURRED, outputPixelDensities: 2)
          }
        }
      }
      body
    }
  }
`


export default BlogPost