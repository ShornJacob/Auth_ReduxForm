import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { formTitles } from 'auth/util'

import { signOutAsync } from 'auth/amplify'

//Amplify Functions - Route names are lowercase for each
// signUp
// confirmSignUp
// resendSignUp
// signIn
// forgotPassword
// forgotPasswordSubmit
// signOut

export default function NavBar({ authenticated, authenticating, email }) {

    // console.log(authenticated)
    // console.log(authenticating)
    // console.log(email)


//React elements need to be have one root
    const navsWhenNotAuthenticated = (
        <Navbar.Collapse id="basic-navbar-nav">
            {/* First nav appears in left */}
            <Nav>
                <Nav.Link href="/signup">SignUp</Nav.Link>
                <Nav.Link href="/signin">SignIn</Nav.Link>
                <NavDropdown title="Users" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/confirmsignup">{formTitles['confirmSignUp']}</NavDropdown.Item>
                    <NavDropdown.Item href="/forgotpassword">{formTitles['forgotPassword']}</NavDropdown.Item>
                    <NavDropdown.Item href="/forgotpasswordSubmit">{formTitles['forgotPasswordSubmit']}</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    )

    
//React elements need to be have one root
    const navsWhenAuthenticated = (
        <Navbar.Collapse id="basic-navbar-nav">
        {/* First nav appears in left */}
        <Nav className="mr-auto"></Nav>
        {/* Second nav appears in right */}
        <Nav>
            <NavDropdown title={email} id="basic-nav-dropdown">
                <Nav.Link to={'/signout'} onClick={() => signOutAsync()}>Sign Out</Nav.Link>
            </NavDropdown>
        </Nav>
        </Navbar.Collapse>)




    return (

        //https://react-bootstrap.github.io/components/navbar/#navbars-mobile-friendly
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
            <Navbar.Brand>Transparency Consulting</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            {authenticated ? navsWhenAuthenticated : navsWhenNotAuthenticated}
 
        </Navbar >

    )
}



