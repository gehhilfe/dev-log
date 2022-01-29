import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { Card } from "react-bootstrap";

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
                        <Link to={content.frontmatter.hero_image_credit_link}>{content.frontmatter.hero_image_credit_text}</Link>
                    </div>
                </React.Fragment>
            }
            <Card.Body>
                <Card.Title>
                    <h2>{content.frontmatter.title}</h2>
                </Card.Title>
                <Card.Text className="mdx-content">
                    <MDXRenderer>
                        {content.body}
                    </MDXRenderer>
                </Card.Text>
                {content.frontmatter.tags && content.frontmatter.tags.length != 0 &&
                    <Card.Text>
                        <p className="text-muted small">Tags: {content.frontmatter.tags.join(', ')}</p>
                    </Card.Text>
                }
            </Card.Body>
        </Card>
    )
}

export default BlogEntry