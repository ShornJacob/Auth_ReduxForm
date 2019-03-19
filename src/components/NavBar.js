import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'


export default function NavBar({ authenticated, authenticating, email }) {

    // console.log(authenticated)
    // console.log(authenticating)
    // console.log(email)



    const navsWhenNotAuthenticated = (<Nav>
        <Nav.Link href="/signin">Sign In</Nav.Link>
        <Nav.Link href="/signup">Sign Up</Nav.Link>
    </Nav>)

    const navsWhenAuthenticated = (
        <NavDropdown title={email} id="basic-nav-dropdown">
            <NavDropdown.Item href="/signout">Sign Out</NavDropdown.Item>
        </NavDropdown>
)




    return (

        //https://react-bootstrap.github.io/components/navbar/#navbars-mobile-friendly
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
            <Navbar.Brand>Transparency Consulting</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

                {/* this nav prevents suth from appearing on right */}
                <Nav className="mr-auto">


                </Nav>

                {authenticated ? navsWhenAuthenticated : navsWhenNotAuthenticated}
            </Navbar.Collapse>
        </Navbar>

    )
}



