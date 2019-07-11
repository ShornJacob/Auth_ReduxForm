import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {formTitles} from 'auth/util'

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



    const navsWhenNotAuthenticated = (<Nav>
        <Nav.Link href="/signup">SignUp</Nav.Link>
        <Nav.Link href="/signin">SignIn</Nav.Link>
        <NavDropdown title="Users" id="basic-nav-dropdown">
            <NavDropdown.Item href="/confirmsignup">{formTitles['confirmSignUp']}</NavDropdown.Item>
            <NavDropdown.Item href="/forgotpassword">{formTitles['forgotPassword']}</NavDropdown.Item>
            <NavDropdown.Item href="/forgotpasswordSubmit">{formTitles['forgotPasswordSubmit']}</NavDropdown.Item>
            </NavDropdown>
    </Nav>)

    const navsWhenAuthenticated = (
        <NavDropdown title={email} id="basic-nav-dropdown">
            <Nav.Link to={'/signout'} onClick={() => signOutAsync()}>Sign Out</Nav.Link>
        </NavDropdown>
    )




    return (

        //https://react-bootstrap.github.io/components/navbar/#navbars-mobile-friendly
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
            <Navbar.Brand>Transparency Consulting</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                {/* 
                this nav prevents suth from appearing on right
                <Nav className="mr-auto">


                </Nav> */}

                {authenticated ? navsWhenAuthenticated : navsWhenNotAuthenticated}
            </Navbar.Collapse>
        </Navbar>

    )
}



