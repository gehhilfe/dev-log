import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { Card, Stack } from "react-bootstrap";
import { Github, Linkedin, Twitter } from "react-bootstrap-icons";
import Layout from "../components/layout";
import { Helmet } from "react-helmet"

const AboutMePage = ({ data }) => {
    return (
        <Layout>
            <Helmet>
                <title>Gehhilfe DevLog About Me</title>
            </Helmet>
            <h1>About Me</h1>
            <Card className="about-me-card" bg="dark">
                <StaticImage className="card-img-top" src="../images/about-me.png" alt="Profile picture" placeholder="blurred" />
                <Card.Body>
                    <Card.Title>Tim Burkert</Card.Title>
                    <Card.Subtitle className="text-muted">Software Magician and Distributed Systems Nerd</Card.Subtitle>
                    <Card.Text className="float-end">
                        <Stack direction="horizontal" gap={3} className="social">
                            <a href="https://github.com/Gehhilfe"><Github /></a>
                            <a href="https://twitter.com/Gehhilfe"><Twitter /></a>
                            <a href="https://www.linkedin.com/in/tim-burkert-1341a9128/"><Linkedin /></a>
                        </Stack>
                    </Card.Text>
                </Card.Body>
            </Card>
            <div className="mdx-content">
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
            </div>
        </Layout>
    )
}

export const query = graphql`
{
    mdx(slug: {eq: "about-me"}) {
      slug
      body
    }
  } 
`

export default AboutMePage