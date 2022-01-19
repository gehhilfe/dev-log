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
        <meta name="keywords" content={content.frontmatter.tags.join(', ')} />
      </Helmet>
      <BlogEntry content={content} />
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String) {
    mdx(slug: {eq: $slug}, fileAbsolutePath: {regex: "/.*blog\/.*/"}) {
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
`


export default BlogPost