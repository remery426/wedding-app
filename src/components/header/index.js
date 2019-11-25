import React from 'react';
import weddingIcon from './wedding_logo.png'
import { Row, Container, Col, Nav, Navbar } from 'react-bootstrap'

export default (props) => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>
            <Container>
                <Row>
                    <Col><img style={{ opacity: 0.5, width: 50, height: 50 }} src={weddingIcon} /> </Col>
                    <Col  style = {{paddingTop: 10 ,fontFamily: "'Great Vibes', cursive"}}> Molly and Ryan 8/15/2020</Col>
                    <Col > <Nav.Link href="#home">Registry</Nav.Link> </Col>
                    <Col > <Nav.Link href="#home">Venue</Nav.Link> </Col>
                    <Col > <Nav.Link href="#home">Our story</Nav.Link> </Col>
                </Row>
            </Container>
            </Navbar.Brand>
        </Navbar>
    )
}