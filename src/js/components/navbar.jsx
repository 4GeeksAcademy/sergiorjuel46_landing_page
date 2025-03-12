import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


export function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Start Bootstrap</a>
        <div>
          <a className="nav-link d-inline text-light mx-2" href="#">Home</a>
          <a className="nav-link d-inline text-light mx-2" href="#">About</a>
          <a className="nav-link d-inline text-light mx-2" href="#">Services</a>
          <a className="nav-link d-inline text-light mx-2" href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
}