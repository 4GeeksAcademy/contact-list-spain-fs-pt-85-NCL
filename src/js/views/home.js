import React from "react";
import "../../styles/home.css";
	
	export const Home = () => (
		<div
		className="d-flex justify-content-center align-items-center"
		style={{ height: "100vh" }} // Hace que ocupe toda la altura de la ventana
	  >
		<div className="card mb-3" style={{ maxWidth: "540px" }}>
		  <div className="row g-0">
			<div className="col-md-4">
			  <img
				src="https://github.com/breatheco-de/exercise-contact-list-context/blob/solution/src/img/m101.jpg?raw=true"
				className="img-fluid rounded-start"
				alt="Placeholder"
			  />
			</div>
			<div className="col-md-8">
			  <div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
				  This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
				</p>
				<p className="card-text">
				  <small className="text-body-secondary">Last updated 3 mins ago</small>
				</p>
			  </div>
			</div>
		  </div>
		</div>
	  </div>	  
	);
