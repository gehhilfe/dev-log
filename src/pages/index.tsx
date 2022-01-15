import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Layout from "../components/layout"
import Navigation from "../components/navigation"

const IndexPage = () => {
    return (
        <Layout>
            <main>
                <title>Home Page</title>
                <h1>Welcome to my Gatsby site!</h1>
                <p>I'm making this by following the Gatsby Tutorial.</p>
            </main>
        </Layout>
    )
}

export default IndexPage