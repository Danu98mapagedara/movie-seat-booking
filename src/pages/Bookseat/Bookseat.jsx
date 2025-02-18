import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../constants/nowshow";
import axios  from 'axios';
import "./Bookseat.css";

const Bookseat = () => {
  const { id } = useParams(); 
  console.log("movie id is:",id);
  const movie = data.find((item) => item.id === id);


  const [formData, setFormData] = useState({
    moviename: "",
    watchdate: "",
    showtime: "",
    username: "",
    useremail: "",
    mobilenumber: "",
    seatnumber: [],
  });

  const [step, setStep] = useState(1); // Manage step state

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Generate future dates
  const generateFutureDates = () => {
    let i;
    const today = new Date();
    const dates = [];
    for (let i = 0; i < 3; i++) {
      const futureDate = new Date();
      futureDate.setDate(today.getDate() + i);
      dates.push(futureDate.toISOString().split("T")[0]);
    }
    return dates;
  };

  // Handle seat selection
  const handleSeatClick = (seat) => {
    setFormData((prev) => ({
      ...prev,
      seatnumber: prev.seatnumber.includes(seat)
        ? prev.seatnumber.filter((s) => s !== seat) // Deselect
        : [...prev.seatnumber, seat], // Select
    }));
  };

  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Booking Details:", formData);
   
    try{

      const RequestBody ={
        movieId:id,
        movieName:formData.moviename,
        watchDate:formData.watchdate,
        showTime:formData.showtime,
        userName: formData.username,
        userEmail:formData.useremail,
        mobileNumber: formData.mobilenumber,
        seatNumber:formData.seatnumber.join(",") 
      };
      console.log("Request Body:",RequestBody);
      await axios.post("http://localhost:8080/api/movies/booking",RequestBody);
    }
    catch(error){
      consol.log("film post  errror",error);
    }
    

  };

  return (
    <div className="bookseat-container">
      {step === 1 && (
        <div className="bookseat-form">
          <h1>Book Your Seat</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            {/* Select Movie */}
            <div className="form-row">
              <label>Select Movie</label>
              <select
                className="form-select"
                name="moviename"
                value={formData.moviename}
                onChange={handleChange}
              >
                <option value="">Select your movie</option>
                {data.map((movie) => (
                  <option key={movie.id} value={movie.name}>
                    {movie.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Select Date */}
            <div className="form-row">
              <label>Select Date</label>
              <select
                className="form-select"
                name="watchdate"
                value={formData.watchdate}
                onChange={handleChange}
              >
                <option value="">Select a date</option>
                {generateFutureDates().map((date) => (
                  <option key={date} value={date}>
                    {date}
                  </option>
                ))}
              </select>
            </div>

            {/* Select Time */}
            <div className="form-row">
              <label>Select Time</label>
              <select
                className="form-select"
                name="showtime"
                value={formData.showtime}
                onChange={handleChange}
              >
                <option value="">Select a time</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="6:00 PM">6:00 PM</option>
              </select>
            </div>

            {/* User Details */}
            <div className="form-row">
              <label>Your Name</label>
              <input
                type="text"
                name="username"
                placeholder="Enter your name"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <label>Your Email</label>
              <input
                type="email"
                name="useremail"
                placeholder="Enter your email"
                value={formData.useremail}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <label>Phone Number</label>
              <input
                type="number"
                name="mobilenumber"
                placeholder="Enter your phone number"
                value={formData.mobilenumber}
                onChange={handleChange}
              />
            </div>

            <button
              className="btn-next"
              onClick={() => setStep(2)}
              disabled={
                !formData.moviename ||
                !formData.watchdate ||
                !formData.showtime ||
                !formData.username ||
                !formData.useremail ||
                !formData.mobilenumber
              }
            >
              Next
            </button>
          </form>
        </div>
      )}

      {step === 2 && (
        <div className="seat-selection">
          <h2 style={{color:'red'}}>Pick your  Seat</h2>
          <h5 >Screen</h5>
          <div className="seats">
            {Array.from({ length: 35 }, (_, index) => index + 1).map((seat) => (
              <button
                key={seat}
                className={`seat-button ${
                  formData.seatnumber.includes(seat) ? "selected" : ""
                }`}
                onClick={() => handleSeatClick(seat)}
              >
                {seat}
              </button>
            ))}
          </div>
          <button
            className="btn-submit"
            onClick={handleSubmit}
            disabled={formData.seatnumber.length === 0}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default Bookseat;
