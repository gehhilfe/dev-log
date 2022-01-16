import classNames from "classnames"
import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import { Button, Col, Container, Nav, Navbar, Row, Stack } from "react-bootstrap"
import { Github, Youtube, Instagram, Twitter } from "react-bootstrap-icons"
import { useMediaQuery } from "react-responsive"

const Navigation = () => {

    const data = useStaticQuery(graphql`
        query NavigationQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }`)

    const isSmallerThanSm = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <Navbar bg="dark" variant="dark" fixed="top" collapseOnSelect expand="md">
            <Container>
                <Navbar.Brand href="/">{data.site.siteMetadata.title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <Nav.Link href="/about-me">About Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

    /*return (
        <React.Fragment>
            <Row>
                <Col xs={12}><h3>{data.site.siteMetadata.title}</h3></Col>
            </Row>
            <div className="dropdown-divider"></div>
            <div className="nav">
                <Stack direction="horizontal" gap={5}>
                    <Link to="/about-me" className="btn btn-outline-secondary">About me</Link>
                    <Link to="/blog" className="btn btn-outline-secondary">Blog</Link>
                </Stack>
            </div>
        </React.Fragment>
    )*/
    /*
       return (
           <Stack direction="horizontal" gap={5} className="nav">
               <h3>{data.site.siteMetadata.title}</h3>
               <div className="vr" />
               <Link to="/about-me">About me</Link>
               <Link to="/blog">Blog</Link>
               <Stack direction="horizontal" className="ms-auto" gap={3} >
                   <Link to="https://github.com/gehhilfe"><Github /></Link>
                   <Link to="https://twitter.com/gehhilfe"><Twitter /></Link>
               </Stack>
           </Stack>
       )*/
}

export default Navigation