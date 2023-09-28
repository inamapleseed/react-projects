import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours);
  }
  
  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=> {
    fetchTours();
  }, [])

  if(tours.length === 0){
    return (
      <div>
        <h2>No Tours</h2>
        <button className='btn' onClick={() => {fetchTours()}}>refresh</button>
      </div>
    )
  }
  if(loading){
    return(
      <Loading />
    )
  }
  return(
    <Tours tours={tours} removeTour={removeTour}/>
  )
}

export default App
