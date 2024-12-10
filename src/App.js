import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterList from './CharacterList';
import SearchBar from './SearchBar';
import Filter from './Filter';
import CharacterDetail from './CharacterDetail';
import './App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState(null);


  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then((response) => {
        setCharacters(response.data.results);
        setFilteredCharacters(response.data.results);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  
  useEffect(() => {
    let filtered = characters;
    if (filterStatus) {
      filtered = filtered.filter(character => character.status === filterStatus);
    }
    if (searchQuery) {
      filtered = filtered.filter(character => character.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    setFilteredCharacters(filtered);
  }, [searchQuery, filterStatus, characters]);

  return (
    <div>
      <h1>Personajes de Rick and Morty</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Filter setFilterStatus={setFilterStatus} />
      <CharacterList
        characters={filteredCharacters}
        setSelectedCharacter={setSelectedCharacter}
      />
      {selectedCharacter && <CharacterDetail character={selectedCharacter} />}
    </div>
  );
};

export default App;
