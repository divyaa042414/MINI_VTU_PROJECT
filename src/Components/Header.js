import React from "react";
import {Navbar, Nav ,NavDropdown,Container, Image} from 'react-bootstrap';

const Header = () => {
    return(
      
        <header>
             
             <Navbar className="NavBar-style" expand="lg">
                <Container>
                    <Navbar.Brand href="#">
                        <Image className="logo-img-style" src="Images/logo.jpg" alt="vtu" roundedCircle/>
                        <h6 className="logo-text-style">Visveswaraya Technological University, Belagavi</h6>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">

                        <Nav.Link href="#ho">Home</Nav.Link>
                        <Nav.Link href="#">About Us</Nav.Link>

                        <NavDropdown title="Academic" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Admissions</NavDropdown.Item>
                            <NavDropdown.Item href="#"> Circulars and notifications</NavDropdown.Item>
                            <NavDropdown.Item href="#">Certificate Issued</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Examination" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Examination Guidlines</NavDropdown.Item>
                            <NavDropdown.Item href="#"> Examination applications</NavDropdown.Item>
                            <NavDropdown.Item href="#">Results</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="VTU Departments" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Computer Science Engineering</NavDropdown.Item>
                            <NavDropdown.Item href="#"> Information Science Engineering</NavDropdown.Item>
                            <NavDropdown.Item href="#">Civil Engineering</NavDropdown.Item>
                            <NavDropdown.Item href="#">mechanical Engineering</NavDropdown.Item>
                            <NavDropdown.Item href="#"> Electrical Engineering</NavDropdown.Item>
                            <NavDropdown.Item href="#">electronics and Communication Engineering</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Staff Login" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Login as Admin</NavDropdown.Item>
                        </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
             </Navbar> 
        </header>
      
        
    )
}
export default Header