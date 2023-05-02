import React,{useState} from 'react'
import PropTypes from 'prop-types';

export default function MovieList(props) {
  const [movieName,setMovieName]=useState(props.name);

  const handelClick=()=>
  {
    setMovieName("Updated Moive name")
  }
  return (
  
      <div className="col-md-4">
        <div className="card">
          <img src="https://assets.gadgets360cdn.com/pricee/assets/product/202212/65_1671448856.jpg"
          style={{height:"300px"}}
          className="card-img-top" alt="Movie 1" />
          <div className="card-body">
            <h5 className="card-title">{movieName}</h5>
            <p className="card-text">{props.description} </p>
            <button type="button" className={props.btn} onClick={handelClick}>Book Now</button>
          </div>
        </div>
      </div>
  
  )
}

MovieList.propTypes={
  name:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  btn:PropTypes.string.isRequired
  
}

MovieList.defaultProps={
  name:"Movie1",
  description:"Dec",
  btn:"btn btn-success"
  
}

