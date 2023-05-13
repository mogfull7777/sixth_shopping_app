import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const Footer = () => {
    return (
        <Container>
            <Row className={'text-center py-3'}>
                <Col>
                    copyright &copy; Junyoung An
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;