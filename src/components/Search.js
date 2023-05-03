import React, { useState } from "react";
import MovieList from "./MovieList";
import DATA from "../MovieData.json";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  const filterData = DATA.filter((movie) => {
    const movieName = movie.name.toLowerCase(); // ["pathan","selfiee" ]
    const search = searchQuery.toLowerCase(); //pathan
    return movieName.includes(search);
  });

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form className="form-inline">
              <input
                type="text"
                className="form-control"
                placeholder="Search Moives"
                value={searchQuery}
                onChange={handleChange}
              ></input>
            </form>
          </div>
        </div>
      </div>
      <br />

      <div className="container">
        {filterData.length > 0 ? (
          <div className="row">
            {filterData.map((e) => (
              <MovieList
                key={e.id}
                btn="btn btn-primary"
                poster={e.posterURL}
                name={e.name}
                description={e.summary}
                category={e.category}
                rating={e.rating}
              />
            ))}
          </div>
        ) : (
          <div className="row">No data found</div>
        )}
      </div>
    </>
  );
}
