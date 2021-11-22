import React, { useState, useEffect } from 'react';
import './App.css';
import { HomePageCategories } from './Components/HomePageCategories/HomePageCategories';
import { Navbar } from './Components/Navbar/Navbar';

function App() {

  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message))
  }, [])

  return (
    <div className="App">
      <Navbar />
      <hr />
      <img src="https://via.placeholder.com/900x600" />
      <h5>short text that describes the website</h5>
      <hr />
      <HomePageCategories />
      <p>test backend, data: {!data ? "Nothing" : data}</p>
    </div> 
  );
}

export default App;
