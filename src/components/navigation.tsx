import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import { Stack } from "react-bootstrap"

const Navigation = () => {

    const data = useStaticQuery(graphql`
    query MyQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
      `)

    return (
        <Stack direction="horizontal" gap={3}>
            <div>{data.site.siteMetadata.title}</div>
            <div className="vr" />
            <div className="ms-auto"><Link to="/about-me" className="btn btn-outline-secondary">About me</Link></div>
            <div><Link to="/blog" className="btn btn-outline-secondary">Blog</Link></div>
        </Stack>
    )
}

export default Navigation