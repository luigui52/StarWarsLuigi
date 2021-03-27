import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Image, DropdownButton, Dropdown } from "react-bootstrap";

export const NavbarMenu = () => {
	return (
		<Navbar>
			<Navbar.Brand>
				<Link to="/" />
			</Navbar.Brand>

			<Nav className="mr-auto">
				<Link className="nav-link" to="/planets">
					Planets
				</Link>
				<Link className="nav-link" to="/characters">
					Personajes
				</Link>
			</Nav>
			<DropdownButton id="dropdown-basic-button" title="Favoritos">
				<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
				<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
				<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
			</DropdownButton>
		</Navbar>

		// <nav className="navbar navbar-light bg-light mb-3">
		// 	<Link to="/">
		// 		<span className="navbar-brand mb-0 h1">React Boilerplate</span>
		// 	</Link>
		// 	<div className="ml-auto">
		// 		<Link to="/demo">
		// 			<button className="btn btn-primary">Check the Context in action</button>
		// 		</Link>
		// 	</div>
		// </nav>
	);
};
