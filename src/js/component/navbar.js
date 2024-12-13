import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container d-flex">
				<Link to="/add-contact" className="ms-auto">
				<button className="btn btn-primary">Add a contact</button>
				</Link>
			</div>
		</nav>
	);
};
