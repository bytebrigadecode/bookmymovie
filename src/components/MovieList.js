import React, { useState } from "react";
import PropTypes from "prop-types";
import { Outlet, Link } from "react-router-dom";
export default function MovieList(props) {
  const [movieName, setMovieName] = useState(props.name);

 
  return (
    <div className="col-md-4">
      <div className="card">
        <img
          src={props.poster}
          style={{ height: "300px" }}
          className="card-img-top"
          alt="Movie 1"
        />
        <div className="card-body">
          <h5 className="card-title">{movieName}</h5>
          
            <span
              class="badge badge-secondary"
              style={{ backgroundColor: "red",marginRight:"10px" }}
            >
              {props.category}
            </span>
        
            <span
              class="badge badge-secondary"
              style={{ backgroundColor: "green" }}
            >
              {props.rating}
            </span>
       
          <p className="card-text">
            {props.description.slice(0, 150) +
              (props.description.lenght > 150 ? "..." : ".")}{" "}
          </p>
          <Link to={`booking/${props.id}`}>Book now</Link>
        </div>
      </div>
    </div>
  );
}

MovieList.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  btn: PropTypes.string.isRequired,
};

MovieList.defaultProps = {
  name: "Movie1",
  description: "Dec",
  btn: "btn btn-success",
};
