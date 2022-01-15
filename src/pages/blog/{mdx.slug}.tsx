import classNames from "classnames";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { Card } from "react-bootstrap";
import Layout from "../../components/layout";

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  const content = data.mdx.frontmatter
  const cardTextClasses = classNames({
    dark: content.hero_image_dark
  })
  return (
    <Layout>
      <h2>{content.title}</h2>
      <p className="text-muted">{data.mdx.frontmatter.date} by Gehhilfe</p>
      {image != null &&
        <div>
          <Card className="hero-card">
            <GatsbyImage image={image} alt={content.hero_image_alt} className="card-img-top" />
          </Card>
          <div className="attribution">
            <Link to={content.hero_image_credit_link}>{content.hero_image_credit_text}</Link>
          </div>
        </div>
      }
      {image == null && <div className="dropdown-divider"></div>}
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
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