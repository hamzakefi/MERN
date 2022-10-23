import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const NavBar = () => {
  return (
    <div>

   
       

        <Navbar bg="light" expand="lg">
      <Container>
      
      <Navbar.Brand href="/">MERN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          
            <NavDropdown title="Contacts" id="basic-nav-dropdown">
              <NavDropdown.Item href="/contactlist">Liste Contact </NavDropdown.Item>
              <NavDropdown.Item href="/add">
               Add Contact
              </NavDropdown.Item>
              
             
             
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default NavBar