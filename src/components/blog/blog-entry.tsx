import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { Card } from "react-bootstrap";

const BlogEntry = ({content}) => {
    const image = getImage(content.frontmatter.hero_image)
    content.frontmatter.tags.sort()
    return (
        <div className="blog-entry">
            <h2>{content.frontmatter.title}</h2>
            <p className="text-muted small">{content.frontmatter.date} by Gehhilfe</p>
            {
                image != null &&
                <div>
                    <Card className="hero-card">
                        <GatsbyImage image={image} alt={content.frontmatter.hero_image_alt} className="card-img-top" />
                    </Card>
                    <div className="attribution">
                        <Link to={content.frontmatter.hero_image_credit_link}>{content.frontmatter.hero_image_credit_text}</Link>
                    </div>
                </div>
            }
            {image == null && <div className="dropdown-divider"></div>}
            <div className="mdx-content">
                <MDXRenderer>
                    {content.body}
                </MDXRenderer>
            </div>
            {content.frontmatter.tags && content.frontmatter.tags.length != 0 && <p className="text-muted small">Tags: {content.frontmatter.tags.join(', ')}</p> }
        </div>
    )
}

export default BlogEntry