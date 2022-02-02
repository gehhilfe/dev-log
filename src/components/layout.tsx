import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "./navigation";
import "./layout.css"
import Footer from "./footer";
import { Helmet } from "react-helmet";

import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

const Layout = ({ children }) => {
    return (
        <Container className="fill">
            <Helmet>
                <html lang="en" />
            </Helmet>
            <Row>
                <Col><Navigation /></Col>
            </Row>
            <Row className="content mx-auto my-4">
                <Col>
                    {children}
                </Col>
            </Row>
            <Footer />
        </Container>
    )
}

export default Layout