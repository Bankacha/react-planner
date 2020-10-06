import React from 'react';
import { Navbar } from 'react-bootstrap';

export default function Header() {
    return (
        <Navbar bg="dark">
            <Navbar.Brand className="text-light" href="#home">Planner</Navbar.Brand>
        </Navbar>
    )
}