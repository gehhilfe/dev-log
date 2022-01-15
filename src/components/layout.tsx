import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "./navigation";
import "./layout.css"
import Footer from "./footer";

const Layout = ({ children }) => {
    return (
        <Container className="fill">
            <Row>
                <Col><Navigation /></Col>
            </Row>
            <Row className="content">
                <Col>
                    {children}
                </Col>
            </Row>
            <Footer />
        </Container>
    )
}

export default Layout