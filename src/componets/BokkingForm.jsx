import './stlyes/bookingform.css'
import React, { useState } from 'react';
import fakeAPI from '../fakeapi';
import { useNavigate } from "react-router-dom";

export default function BookingForm({ availableTimes = [] }) {
  const navigate = useNavigate();
  console.log("Available Times in BookingForm:", availableTimes);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    range: 1,
    occasion: ''
  });
  const [slideNum, setSlideNum] = useState(1);
  const [isFormValid, setIsFormValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    validateForm();
  };

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setSlideNum(value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    validateForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      const test = fakeAPI.submitAPI(formData);
      if (test) {
        navigate("/confirmBooking");
      }
    }
  };

  const validateForm = () => {
    const { date, time, range } = formData;
    const isValid = date && time && range >= 1 && range <= 10;
    setIsFormValid(isValid);
  };

  const times = Array.isArray(availableTimes) ? availableTimes : [];

  return (
    <div className='container2'>
      <div className="box2">
        <div className="centralImg">
          <img src="../../reserve.jpg" alt="Reservation" />
        </div>
        <div className='subject'>
          <h1>Reservation</h1>
        </div>
        <div className='form'>
          <form onSubmit={handleSubmit}>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <label htmlFor="res-time">Choose time</label>
            <select
              id="res-time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select a time</option>
              {times.map((time, index) => (
                <option key={index} value={time}>{time}</option>
              ))}
            </select>
            <label className='nump' htmlFor="range">Amount of people</label>
            <input
              type="range"
              name="range"
              id='range'
              max={10}
              min={1}
              value={formData.range}
              list="tickmarks"
              onChange={handleChange2}
              required
            />
            <datalist id="tickmarks">
              {Array.from({ length: 10 }, (_, i) => i + 1).map((value) => (
                <option key={value} value={value} label={value.toString()}></option>
              ))}
            </datalist>
            <p className='nump'>{`Number of people: ${slideNum}`}</p>
            <input
              type="text"
              name="occasion"
              placeholder="Special Occasion"
              value={formData.occasion}
              onChange={handleChange}
            />
            <button type="submit" disabled={!isFormValid}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
