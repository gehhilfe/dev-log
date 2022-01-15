import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "./navigation";
import { Github } from "react-bootstrap-icons"
import "./layout.css"

const Layout = ({ children }) => {
    return (
        <Container>
            <Row>
                <Col><Navigation /></Col>
            </Row>
            <Row>
                <Col>
                    {children}
                </Col>
            </Row>
            <Row>
                <Col><Github /></Col>
            </Row>
        </Container>
    )
}

export default Layout