import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Bollywood from './Bollywood';
import Technology from './Technology';
import Hollywood from './Hollywood';
import Fitness from './Fitness';
import Food from './Food';
import Home from './Home';
export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>
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
                                    <Nav.Link as={Link} to={"/"} className="navbarstyle">Home</Nav.Link>
                                    <Nav.Link as={Link} to={"/bollywood"} className="navbarstyle">Bollywood</Nav.Link>
                                    <Nav.Link as={Link} to={"/technology"} className="navbarstyle">Technology</Nav.Link>
                                    <Nav.Link as={Link} to={"/hollywood"} className="navbarstyle ">Hollywood</Nav.Link>
                                    <Nav.Link as={Link} to={"/fitness"} className="navbarstyle ">Fitness</Nav.Link>
                                    <Nav.Link as={Link} to={"/food"} className="navbarstyle ">Food</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>

                        </Container>
                    </Navbar>

                </div>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/bollywood" element={<Bollywood />}></Route>
                        <Route path="/technology" element={<Technology />}></Route>
                        <Route path="/hollywood" element={<Hollywood />}></Route>
                        <Route path="/fitness" element={<Fitness />}></Route>
                        <Route path="/food" element={<Food />}></Route>
                    </Routes>
                </div>
            </Router>
        )
    }
}
