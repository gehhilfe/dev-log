import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { Card, Stack } from "react-bootstrap";
import { Github, Linkedin, Mastodon, Twitter } from "react-bootstrap-icons";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";

import { useSpring, animated } from "react-spring";

const AboutMePage = ({ data }) => {
  const props = useSpring({
    to: { opacity: 1, transform: "translateX(0px)" },
    from: { opacity: 0, transform: "translateX(20px)" },
  });
  const AnimatedCard = animated(Card);
  return (
    <Layout>
      <Helmet>
        <title>Gehhilfe DevLog About Me</title>
      </Helmet>

      <h1>About Me</h1>
      <AnimatedCard style={props} className="about-me-card" bg="dark">
        <StaticImage
          className="card-img-top"
          src="../images/about-me.png"
          alt="Profile picture"
          placeholder="blurred"
        />
        <Card.Body>
          <Card.Title>Tim Burkert</Card.Title>
          <Card.Subtitle className="text-muted">
            Software Magician &amp; Nerd
          </Card.Subtitle>
          <Card.Text className="float-end p-1">
            <Stack gap={3} direction="horizontal" className="social">
              <a href="https://github.com/Gehhilfe">
                <Github />
              </a>
              <a href="https://twitter.com/Gehhilfe">
                <Twitter />
              </a>
              <a rel="me" href="https://det.social/@gehhilfe">
                <Mastodon />
              </a>
              <a href="https://www.linkedin.com/in/tim-burkert-1341a9128/">
                <Linkedin />
              </a>
            </Stack>
          </Card.Text>
        </Card.Body>
      </AnimatedCard>

      <div className="mdx-content">
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    mdx(slug: { eq: "about-me" }) {
      slug
      body
    }
  }
`;

export default AboutMePage;
