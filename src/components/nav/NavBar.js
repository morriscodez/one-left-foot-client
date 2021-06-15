import React from "react"
import { Link } from "react-router-dom"
// import "./NavBar.css"
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Form, FormControl, Button } from "react-bootstrap"


export const NavBar = (props) => {
    return (

        <>
            <Navbar bg="dark" variant="dark">
                {/* <Navbar.Brand href="/">
                    <img
                        src="https://i.imgur.com/lWKMaoG.png"
                        width="80"
                        height="80"
                        className="d-inline-block align-top"
                        alt="Spotter logo" />
                </Navbar.Brand> */}
                <Nav className="mr-auto">
                    <Nav.Link className="nav-link" href="/findapartner">Find A Partner</Nav.Link>
                    <Nav.Link className="nav-link" href="/myschedule">My Schedule</Nav.Link>
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