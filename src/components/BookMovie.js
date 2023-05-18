import React, { useState } from "react";

import { useParams } from "react-router-dom";
import DATA from "../MovieData.json";
import "./style.css";
export default function BookMovie() {
  const [showModal, setShowModal] = useState(false);
  const [selectedTime, setSelectedTime] = useState();

  const [selectedTheater, setSelectedTheater] = useState();
  const [showConfirmation, setShowConfirmation] = useState(false);
  

  let { id } = useParams();

  const movie = DATA.find((item) => item.id === parseInt(id));

  const timeSlot = ["10:00AM", "2:00PM", "04:00PM", "06:00PM"];

  const theaters = ["Theater1", "Theater2", "Theater3", "Theater4"];
  const showModalHandle = () => {
    setShowModal(true);
  };

  const confirmBooking = () => {
    setShowConfirmation(true);
    setShowModal(false)

  };
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <img
            style={{ height: "400px" }}
            src={movie.posterURL}
            alt="Movie Poster"
            class="img-fluid"
          />
        </div>
        <div class="col-md-8">
          <h2>{movie.name} </h2>
          <p>Rating: {movie.rating}</p>
          <p>Type: {movie.category}</p>
          <p>Description: {movie.summary}</p>
          <button onClick={showModalHandle} class="btn btn-primary">
            Book Now
          </button>
        </div>
      </div>

      {/* show modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Select Time and Theater</h3>
            <form>
              <label htmlFor="Time">Time</label>
              <select
                id="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                <option value="">Select Time</option>
                {timeSlot.map((time, i) => (
                  <option key={i} value={time}>
                    {time}
                  </option>
                ))}
              </select>

              <label htmlFor="Time">Theater</label>
              <select
                id="time"
                value={selectedTheater}
                onChange={(e) => setSelectedTheater(e.target.value)}
              >
                <option value="">Select Theater</option>
                {theaters.map((t, i) => (
                  <option key={i} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <button className="btn btn-primary" onClick={confirmBooking}>
                confirm booking
              </button>
            </form>
          </div>

       
        </div>
      )}

          {/* Confirmation page */}
          {showConfirmation && (
        <div className="confirmation-page">
          <h2>Booking Confirmation</h2>
          <p>Movie: {movie.name}</p>
          <p>Time: {selectedTime}</p>
          <p>Theater: {selectedTheater}</p>
          <p>Enjoy the movie!</p>
        </div>
      )}
    </div>
  );
}
