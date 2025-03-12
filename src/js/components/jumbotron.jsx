import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export function Jumbotron() {
    return (
      <div className="container mt-5">
        <div className="p-5 bg-light rounded">
          <h1 className="display-4 text-start">A Warm Welcome!</h1>
          <p className="text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa, ipsam, eligendi,
            in quo sunt possimus non incidunt.
          </p>
          <div className="text-start">
          <a className="btn btn-primary btn-lg" href="#">Call to action!</a>
          </div>
        </div>
      </div>
    );
  }