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
      <h5 className="title-home">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio excepturi itaque a dolorum pariatur accusamus saepe officiis aperiam repellendus voluptates officia, eaque quod porro earum voluptas eos praesentium necessitatibus quo!</h5>
      <img className="img-home" src="https://cdn.radiofrance.fr/s3/cruiser-production/2015/10/c55c992e-557e-4e3c-9e0b-f655deaa1815/870x489_pont_st-benezet-avignon_francebleu.jpg" />
      <hr />
      <HomePageCategories />
      <p>test backend, data: {!data ? "Nothing" : data}</p>
    </div> 
  );
}

export default App;
