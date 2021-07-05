import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from "react-bootstrap"
import "./nav.css"


export const NavBar = (props) => {
    return (

        <>
            <Navbar className="nav">
                <Navbar.Brand href="/">
                    <img
                        src="https://i.imgur.com/xEW56G2.png"
                        width="60"
                        height="60"
                        className="d-inline-block align-top"
                        alt="logo" />
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link className="nav-link" href="/findapartner">Find A Partner</Nav.Link>
                    <Nav.Link className="nav-link" href="/myavailability">My Availability</Nav.Link>    
                    <Nav.Link className="nav-link" href="/dances">Dances</Nav.Link>    
                </Nav>
                <Nav className="ml-auto">
                        <Nav.Link className="nav-link" href="/profile">Profile</Nav.Link>
                        <Nav.Link className="nav-link" href="/login" onClick={() => {
                            localStorage.clear()}}>
                                Logout
                        </Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}