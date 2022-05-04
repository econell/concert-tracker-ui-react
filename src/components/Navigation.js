
import React, { useState } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNav = () => setIsOpen(!isOpen);

    return (
        <>
            <Navbar color="faded" light>
                <NavbarBrand href="/" className="mr-auto">Concert Tracker</NavbarBrand>
                <NavbarToggler onClick={toggleNav} className="mr-2" />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="artist">Artists</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    )
}

export default Navigation
