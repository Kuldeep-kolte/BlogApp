import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import MainHeader from './MainHeader';
export default class NavbarComp extends Component {
    render() {
        return (
            <div>
                <MainHeader />
                <Navbar expand="lg" className='container container1'>
                    <Container>
                        {/* <Navbar.Brand href="#home">The Siren</Navbar.Brand> */}
                        <div className='ab'>
                            <span className='header'>The</span>
                            <span className='h1 siren'>Siren</span>
                        </div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto text-center nav1">
                                <NavLink as={Link} to={"/"} className="navbarstyle sd">Home</NavLink>
                                <NavLink as={Link} to={"/bollywood"} className="navbarstyle">Bollywood</NavLink>
                                <NavLink as={Link} to={"/technology"} className="navbarstyle">Technology</NavLink>
                                <NavLink as={Link} to={"/hollywood"} className="navbarstyle ">Hollywood</NavLink>
                                <NavLink as={Link} to={"/fitness"} className="navbarstyle ">Fitness</NavLink>
                                <NavLink as={Link} to={"/food"} className="navbarstyle ">Food</NavLink>
                            </Nav>
                        </Navbar.Collapse>

                    </Container>
                </Navbar>

            </div>

        )
    }
}
