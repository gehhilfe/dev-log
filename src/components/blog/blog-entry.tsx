import { Link as a, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import LikeButton from "../like-button";

const BlogEntry = ({ content }) => {
    const image = getImage(content.frontmatter.hero_image)
    content.frontmatter.tags.sort()
    return (
        <Card className="blog-entry" bg="dark">
            {
                image != null &&
                <React.Fragment>
                    <GatsbyImage image={image} alt={content.frontmatter.hero_image_alt} className="card-img-top" />
                    <div className="attribution">
                        <a href={content.frontmatter.hero_image_credit_link}>{content.frontmatter.hero_image_credit_text}</a>
                    </div>
                </React.Fragment>
            }
            <Card.Body>
                <Card.Title>
                    <h2>{content.frontmatter.title}</h2>
                </Card.Title>
                <div className="mdx-content">
                    <MDXRenderer>
                        {content.body}
                    </MDXRenderer>
                </div>
                <Container>
                    <Row className="align-items-center">
                        <Col className="text-muted small tags">{content.frontmatter.tags && content.frontmatter.tags.length != 0 &&
                            content.frontmatter.tags.map(it => (<Link to={`/blog/tag/${it}`} key={it}> {it} </Link>))
                        }</Col>
                        <Col md="auto"><LikeButton slug={content.slug} /></Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
}

export default BlogEntry