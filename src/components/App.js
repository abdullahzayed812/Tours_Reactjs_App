import React, { useEffect, useState } from 'react';
import { Tours } from  "./Tours";
import { Loading } from "./Loading";
import './App.css';
const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
      console.log(tours);
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTours();
  }, [])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if (loading) {
    return (
      <Loading />
    )
  }

  if (tours.length === 0) {
    return (
      <div className="no-tours-wrapper">
        <h1 className="no-tours">No Tours</h1>
        <button onClick={fetchTours}>Refresh</button>
      </div>
    )
  }

  return (
    <Tours
      tours={tours}
      removeTour={removeTour}
    />
  );
}

export default App;
