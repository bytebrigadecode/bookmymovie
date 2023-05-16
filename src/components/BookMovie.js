import React from 'react'

import { useParams } from "react-router-dom";

export default function BookMovie() {
    let {id}=useParams();
  return (
    <div class="container">
    <div class="row">
      <div class="col-md-4">
        <img style={{ height: "400px" }} src="https://m.media-amazon.com/images/M/MV5BZmMwOGFkYzgtODY0ZC00ZDJiLWE5MDUtNWFjNWEyZWMxMTM1XkEyXkFqcGdeQXVyMTMzNzIyNDc1._V1_.jpg" alt="Movie Poster" class="img-fluid"/>
      </div>
      <div class="col-md-8">
        <h2>Movie Title {id} </h2>
        <p>Rating: 1</p>
        <p>Type: Action, Adventure, Sci-Fi</p>     
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum harum voluptatem tempore laboriosam iusto.</p>
        <a href="#" class="btn btn-primary">Book Now</a>
      </div>
    </div>
  </div>
  )
}
