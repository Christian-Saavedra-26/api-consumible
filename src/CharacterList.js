import React from 'react';

const CharacterList = ({ characters, setSelectedCharacter }) => {
  return (
    <div className="character-list">
      {characters.map((character) => (
        <div 
          key={character.id} 
          className="character-item" 
          onClick={() => setSelectedCharacter(character)}
        >
          <img 
            src={character.image} 
            alt={character.name} 
            className="character-image" 
          />
          <h3 className="character-name">{character.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
