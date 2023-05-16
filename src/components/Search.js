import React, { useState } from "react";
import MovieList from "./MovieList";
import DATA from "../MovieData.json";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sortVal, setSortVal] = useState("none");

  const [count, setCount] = useState(6);

  const filterData = DATA.filter((movie) => {
    const movieName = movie.name.toLowerCase(); // ["pathan","selfiee" ]
    const search = searchQuery.toLowerCase(); //pathan

    const movieCategory = movie.category.toLowerCase();
    const selectedMovie = category.toLowerCase();

    //search filter
    if (search && !movieName.includes(search)) {
      return false;
    }

    // category

    if (selectedMovie !== "all" && movieCategory !== selectedMovie) {
      return false;
    }

    return true;
  }).sort((a,b)=>{

    if(sortVal==='asc')
    return a.rating-b.rating
    else if(sortVal==='dsc')
    return b.rating-a.rating
    else
    return 0;

  })

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSelect = (e) => {
    setCategory(e.target.value);
  };

  const handleSort = (e) => {
    setSortVal(e.target.value);
  };

  const handelClick=()=>
  {
    setSearchQuery("")
    setCategory("All")
    setSortVal("none")
  


    
  }


  const viewAll=()=>{
    setCount(DATA.length)
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
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
          <div className="col-md-3">
            <select
              class="form-select"
              aria-label="Default select example"
              onChange={handleSelect}
              value={category}
            >
              <option value="All">Pleas select category</option>
              <option value="Biography">Biography</option>
              <option value="Drama">Drama</option>
              <option value="Comedy">Comedy</option>
              <option value="Romance">Romance</option>
              <option value="Action">Action</option>
            </select>
          </div>

          <div className="col-md-3">
            <select
              class="form-select"
              aria-label="Default select example"
              onChange={handleSort}
              value={sortVal}
            >
              <option value="none">Sort by rating</option>
              <option value="asc">Low to High</option>
              <option value="dsc">High to low</option>
            </select>
          </div>
          <div className="col-md-3">
          <button type="button" className="btn btn-success" onClick={handelClick}>Clear All</button>
          </div>
        </div>
      </div>
      <br />

      <div className="container">
        {filterData.length > 0 ? (
          <div className="row">
            {filterData.slice(0,count).map((e) => (
              <MovieList
                key={e.id}
                btn="btn btn-primary"
                poster={e.posterURL}
                name={e.name}
                description={e.summary}
                category={e.category}
                rating={e.rating}
                id={e.id}
              />
            ))}
          </div>
        ) : (
          <div className="row">No data found</div>
        )}
        <br/>
        {DATA.length >count &&
                 <div className="row">
<div className="col-md-4"></div>
<div className="col-md-4" style={{marginLeft:"100px"}}>
          <button type="button" className="btn btn-success" onClick={viewAll}>View All</button>
          </div>
          <div className="col-md-4"></div>
      </div>}
      
      </div>
    </>
  );
}
