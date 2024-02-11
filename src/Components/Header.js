import React from "react";
import {Navbar, Nav ,NavDropdown,Container, Image} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const Header = () => {
    return(
      
        <header>
             
             <Navbar className="NavBar-style" expand="lg">
                <Container>
                    <LinkContainer to='/'>
                         <Navbar.Brand href="/">
                            <Image className="logo-img-style" src="Images/logo.jpg" alt="vtu" roundedCircle/>
                            <h6 className="logo-text-style">Visveswaraya Technological University, Belagavi</h6>
                            </Navbar.Brand>
                    </LinkContainer>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                         <LinkContainer to='/' >
                                <Nav.Link href="/">Home</Nav.Link>
                         </LinkContainer>

                         <LinkContainer to='/about' >
                                <Nav.Link href="/about">About Us</Nav.Link>
                        </LinkContainer>

                        
                        <NavDropdown title="Academic" id="basic-nav-dropdown">
                            <LinkContainer to='/admission'>
                                <NavDropdown.Item href="#">Admissions</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/circulars'>
                                <NavDropdown.Item href="#"> Circulars and notifications</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/CertificateIssued'>
                                <NavDropdown.Item href="#">Certificate Issued</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>

                        <NavDropdown title="Examination" id="basic-nav-dropdown">
                            <LinkContainer to='/guidlines'>
                                <NavDropdown.Item href="#">Examination Guidlines</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/applications'>
                                <NavDropdown.Item href="#"> Examination applications</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/results/loginPage'>
                                <NavDropdown.Item href="#">Results</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>

                        <NavDropdown title="VTU Departments" id="basic-nav-dropdown">
                            <LinkContainer to='/ComputerScience'>
                                <NavDropdown.Item href="#">Computer Science Engineering</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/InformationScience'>
                                <NavDropdown.Item href="#"> Information Science Engineering</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/Civil'>
                                <NavDropdown.Item href="#">Civil Engineering</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/mechanical'>
                                <NavDropdown.Item href="#">mechanical Engineering</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/Electrical'>
                                <NavDropdown.Item href="#"> Electrical Engineering</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/electronics'>
                                <NavDropdown.Item href="#" >electronics and Communication Engineering </NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>

                        <NavDropdown title="Staff Login" id="basic-nav-dropdown">
                            <LinkContainer to='/LoginAsAdmin'>
                                <NavDropdown.Item href="#">Login as Admin</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
             </Navbar> 
        </header>
      
        
    )
}
export default Header