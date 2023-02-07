import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  let APIURL = `https://rickandmortyapi.com/api/character/?page=1`

  const [characters, setCharacters] = useState([])

  const requiredItems = async() => {
    const response = await fetch(APIURL)
    const data = await response.json()
    setCharacters(data.results)
    console.log(data.results)
}

useEffect(() => {
    requiredItems()
}, [])

  return (
    <div className="App">
      <div className='main-container'>
        <div className='main-container-title'>
          <h1 className='title'>Rick and Morty Characters</h1>
        </div>
        <div className="filter">Search bar goes here</div>
        <div className='main-container-cards'>
          <div className="card-container">test</div>
          <div className="card-container">test2</div>
          <div className="card-container">test3</div>
          <div className="card-container">test4</div>
          <div className="card-container">test5</div>
          <div className="card-container">test5</div>
          <div className="card-container">test5</div>
          <div className="card-container">test5</div>
          <div className="card-container">test5</div>
          <div className="card-container">test5</div>
          <div className="card-container">test5</div>
          <div className="card-container">test5</div>
        </div>
      </div>
    </div>
  );
}

export default App;
