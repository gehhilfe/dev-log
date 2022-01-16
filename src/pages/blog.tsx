import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Gehhilfe DevLog</title>
      </Helmet>
      <p>Blogs</p>
      {data.allMdx.nodes.map(it => (
        <article key={it.id}>
          <h2><Link to={`/blog/${it.slug}`}>{it.frontmatter.title}</Link></h2>
          <p>Posted: {it.frontmatter.date}</p>
          <p>
            {it.excerpt}
          </p>
        </article>
      ))}
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {type: {eq: "blog"}}}) {
      nodes {
        frontmatter {
          date(formatString: "YYYY/MM/DD")
          title
        }
        id
        slug
        excerpt(truncate: false, pruneLength: 300)
      }
    }
  }
`

export default BlogPage