import CharacterDetails from '../components/CharacterDetails';
import React, { useEffect, useState } from 'react';
import RaceDetails from '../components/RaceDetails';
import CharacterTraits from '../components/CharacterTraits';
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
    <div className="w-100 bg-gray-800 text-white h-screen p-5">
      <div className='w-100 p-5 flex justify-start space-x-5'>
        <CharacterDetails character={character} />
        <RaceDetails character={character} />
        <CharacterTraits character={character} />
      </div>
    </div>
  );
};

export default CharacterPage;