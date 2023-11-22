import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import CharacterDetails from '../components/CharacterDetails';
import RaceDetails from '../components/RaceDetails';
import { fetchCharacter } from '../services/characterService';
import { Character } from '../types/Character';

const CharacterPage: React.FC = () => {
  const [character, setCharacter] = useState<Character | null>(null);
  useEffect(() => {
    const fetchCharacterData = async () => {
      const data = await fetchCharacter(1);
      setCharacter(data);
    };

    fetchCharacterData();
  }, []);

  return (
    <div className="">
      <Header />
      <RaceDetails character={character} />
      <CharacterDetails character={character} />
    </div>
  );
};

export default CharacterPage;