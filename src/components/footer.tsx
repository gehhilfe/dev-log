import classNames from "classnames";
import { Link, navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { Heart } from "react-bootstrap-icons";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
    return (
        <React.Fragment>
            <div className="dropdown-divider"></div>
            <Row>
                <Col md>
                    <div className="footer">
                        <Stack direction="horizontal" gap={5}>
                            <Link to="/imprint">Imprint</Link>
                            <Link to="/privacy">Privacy</Link>
                        </Stack>
                    </div>
                </Col>
                <Col md>
                    <div className="footer-left">
                        <Stack direction="horizontal" gap={2}>
                            <div>Made by Gehhilfe with</div>
                            <StaticImage src="../images/icon.png" alt="Gatsby Icon" width={16} height={16} placeholder="none" />
                            <div>and</div>
                            <Heart />
                        </Stack>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Footer