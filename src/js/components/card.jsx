
import React from "react";


export function Card({ title, text }) {
  return (
    <div className="d-flex">
      <div className="card d-flex flex-column">
        <img
          src="https://picsum.photos/seed/picsum/200/300"
          className="card-img-top"  
          style={{ height: "200px", objectFit: "cover" }} 
          alt=""
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text flex-grow-1">{text}</p>
          <button type="button" className="btn btn-primary mt-auto">
            Find out more!
          </button>
        </div>
      </div>
    </div>
  );
}


