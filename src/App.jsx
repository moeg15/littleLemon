import React, { useReducer, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./componets/Header";
import Main from "./componets/Main";
import Footer from "./componets/Footer";
import Cards from "./componets/Cards";
import BookingPage from "./componets/BookingPage";
import fakeAPI from './fakeapi';
import ConfirmBooking from './componets/ConfirmedBooking';
const fetchData = (date) => {
  try {
    return fakeAPI.fetchAPI(date); // Assuming fetchAPI returns a Promise
  } catch (error) {
    console.error("Error fetching data:", error);
    return Promise.resolve([]); // Return a resolved promise with an empty array
  }
};

// Update times directly using fakeAPI.fetchAPI
const updateTimes = (state, action) => {
  switch (action.type) {
    case 'SET_INITIAL_TIMES':
      return action.times;
    case 'UPDATE_TIMES':
      // Handle Promise directly
      return fetchData(action.date)
        .then(times => times)  // Resolve promise and return result
        .catch(error => {
          console.error("Error updating times:", error);
          return []; // Fallback to empty array in case of error
        });
    default:
      return state;
  }
};
function App() {
  const [availableTimes, dispatch] = useReducer((state, action) => updateTimes(state, action), []);

  useEffect(() => {
    const initialize = async () => {
      const today = new Date();
      const times = await fetchData(today);
      dispatch({ type: 'SET_INITIAL_TIMES', times });
    };
    initialize();
  }, []);


  return (
    <>
      <Routes>
        <Route element={<><Header/><Main/><Cards/><Footer/></>} path="/" />
        <Route element={<><Header/><BookingPage passdown={availableTimes } dispatch={dispatch}/></>} path="/reservation" />
        <Route element={<><ConfirmBooking/></>} path='/confirmBooking'/>
      </Routes>
    </>
  );
}

export default App;
