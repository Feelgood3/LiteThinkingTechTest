import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import './App.css';

function App() {

  const [currentPage, setCurrentPage] = useState(1)
  const [currentCharactersShown, setCurrentCharactersShown] = useState([1,2,3,4,5,6,7,8,9,10,11,12])
  const [characters, setCharacters] = useState([])

  let charactersShown = currentCharactersShown.join(",")
  let APIURL = `https://rickandmortyapi.com/api/character/${charactersShown}`


useEffect(() => {
  const requiredItems = async() => {
    const response = await fetch(APIURL)
    const data = await response.json()
    setCharacters(data)
  };
  requiredItems()
  }, [currentPage])

  const handlePageChangerPlusOne = (page) => {
    setCurrentPage(page);
    const characterSelector = currentCharactersShown.map(x => x+(12))
    setCurrentCharactersShown(characterSelector)
  };

  const handlePageChangerMinusOne = (page) => {
    setCurrentPage(page);
    const characterSelector = currentCharactersShown.map(x => x-(12))
    setCurrentCharactersShown(characterSelector)
  };

  return (
    <div className="App">
      <div className='main-container'>
        <div className='main-container-title'>
          <h1 className='title'>Rick and Morty Characters</h1>
        </div>
        <div className="filter">Search bar goes here</div>
        <div className='main-container-cards'>
          <Card characters={characters} />
        </div>
        <div className='main-container-buttons'>
            <button className='page-buttons'
              disabled={currentPage === 1}
              onClick={() => handlePageChangerMinusOne(currentPage - 1)}
            >
              Previous
            </button>
            <button className='page-buttons'
              disabled={characters.length < 12}
              onClick={() => handlePageChangerPlusOne(currentPage + 1)}
            >
              Next
            </button> 
          </div>
      </div>
    </div>
  );
}

export default App;
