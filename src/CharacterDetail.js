import React from 'react';

const CharacterDetail = ({ character }) => {
  return (
    <div className="character-detail">
      <h2 className="detail-name">{character.name}</h2>
      <img 
        src={character.image} 
        alt={character.name} 
        className="detail-image" 
      />
      <div className="detail-info">
        <p><strong>Estado:</strong> {character.status}</p>
        <p><strong>Especies:</strong> {character.species}</p>
        <p><strong>Género:</strong> {character.gender}</p>
        <p><strong>Origen:</strong> {character.origin.name}</p>
        <p><strong>Ubicacion:</strong> {character.location.name}</p>
      </div>
    </div>
  );
};

export default CharacterDetail;
