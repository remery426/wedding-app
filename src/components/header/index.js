import React from 'react';
import weddingIcon from './wedding_logo.png'
import { Row, Container, Col, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
export default (props) => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>
                <Container>
                    <Row>
                        <Col><NavLink to='/'><img style={{ opacity: 0.5, width: 50, height: 50 }} src={weddingIcon} alt='logo' /></NavLink> </Col>
                        <Col style={{ paddingTop: 10, fontFamily: "'Great Vibes', cursive" }}> <NavLink style={{ color: 'black' }} activeStyle={{ color: 'black' }} to='/'>Molly and Ryan 8/15/2020</NavLink></Col>
                        <Col style={{ paddingTop: 10, fontFamily: "'Great Vibes', cursive" }}> <Nav.Link ><NavLink style={{ color: 'black' }} activeStyle={{ color: 'black' }} to="/registry">Registry</NavLink></Nav.Link> </Col>
                        <Col style={{ paddingTop: 10, fontFamily: "'Great Vibes', cursive" }}> <Nav.Link ><NavLink style={{ color: 'black' }} activeStyle={{ color: 'black' }} to='/venue'>Venue</NavLink></Nav.Link> </Col>
                        <Col style={{ paddingTop: 10, fontFamily: "'Great Vibes', cursive" }}> <Nav.Link><NavLink style={{ color: 'black' }} activeStyle={{ color: 'black' }} to='/story'>Our Story</NavLink></Nav.Link> </Col>
                    </Row>
                </Container>
            </Navbar.Brand>
        </Navbar>
    )
}