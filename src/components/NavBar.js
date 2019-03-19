import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


export default function NavBar({authenticated,authenticating,email}) {

    // console.log(authenticated)
    // console.log(authenticating)
    // console.log(email)


    const navsWhenNotAuthenticated =       (<Nav>
        <Nav.Link href="/signin">Sign In</Nav.Link>
        <Nav.Link href="/signup">Sign Up</Nav.Link>
</Nav>)
    
    const navsWhenAuthenticated =  (<Nav>
        <Navbar.Text>
            {email}
        </Navbar.Text>
    </Nav>)
    
    


    return (

        //https://react-bootstrap.github.io/components/navbar/#navbars-mobile-friendly
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand>Transparency Consulting</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

        {/* this nav prevents suth from appearing on right */}
          <Nav className="mr-auto">

          
          </Nav>

          {authenticated ? navsWhenAuthenticated : navsWhenNotAuthenticated}
        </Navbar.Collapse>
      </Navbar>

    )
}



