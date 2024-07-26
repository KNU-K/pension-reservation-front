import React from "react";
import { Link } from "react-router-dom"; // For routing
import { Navbar, Nav, NavDropdown } from "react-bootstrap"; // Bootstrap components

const NavBar = () => {
    return (
        <Navbar className="bg-gray-100 py-2" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-none">
                <span className="text-gray-700">☰</span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto flex space-x-4">
                    <Nav.Link as={Link} to="/" className="ml-4 text-gray-800 text-sm font-medium hover:text-gray-600" style={{ fontSize: "0.875rem", fontWeight: "500" }}>
                        HOME
                    </Nav.Link>
                    <NavDropdown title="PROLOGUE" id="basic-nav-dropdown" className="text-sm">
                        <NavDropdown.Item as={Link} to="/story" className="text-gray-800 hover:bg-gray-200">
                            STORY
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/architecture" className="text-gray-800 hover:bg-gray-200">
                            ARCHITECTURE
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/location" className="text-gray-800 hover:bg-gray-200">
                            LOCATION
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="#" className="text-gray-800 text-sm font-medium hover:text-gray-600" style={{ fontSize: "0.875rem", fontWeight: "500" }}>
                        EXPERIENCE
                    </Nav.Link>
                    <NavDropdown title="ROOMS" id="basic-nav-dropdown-rooms" className="text-sm">
                        <NavDropdown.Item as={Link} to="#" className="text-gray-800 hover:bg-gray-200">
                            IN-HALE
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="#" className="text-gray-800 hover:bg-gray-200">
                            EX-HALE
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="#" className="text-gray-800 hover:bg-gray-200">
                            THE CALM
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="RESERVATIONS" id="basic-nav-dropdown-reservations" className="text-sm">
                        <NavDropdown.Item as={Link} to="/reservation" className="text-gray-800 hover:bg-gray-200">
                            Reservation
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="#" className="text-gray-800 hover:bg-gray-200">
                            Confirm Reservation
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="INFORMATION" id="basic-nav-dropdown-information" className="text-sm">
                        <NavDropdown.Item as={Link} to="#" className="text-gray-800 hover:bg-gray-200">
                            마트
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="#" className="text-gray-800 hover:bg-gray-200">
                            음식점
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
