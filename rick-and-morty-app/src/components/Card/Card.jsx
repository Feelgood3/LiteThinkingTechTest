import React from 'react';

function Card( {characters} ) {
  let cardsInformation

  if(characters) {
    cardsInformation = characters
      .map((character) => {
        return (
        <div className='card-container' key={character.id}>
          <div className="card-container-picture">
            <img src={character.image} alt={character.name} className="card-container-picture__inside" />

          </div>
          <div className="card-container-character">
            <h2 className='card-container-character-name'>{character.name.toUpperCase()}</h2>
            <p className='card-container-character-description'><strong>Status: </strong>{character.status}</p>
            <p className='card-container-character-description'><strong>Gender: </strong>{character.gender}</p>
            <p className='card-container-character-description'><strong>Specie: </strong>{character.species}</p>
          </div>
          <div className="card-container-id">
            <p className='card-container-character-id'><strong>#: </strong>{character.id}</p>
          </div>
        </div>
      )})
  } else {
    cardsInformation = 'Couldn\'t find these characters in any dimension'
  }

  return (
    <>
      {cardsInformation}
    </>
  );
}

export default Card;
