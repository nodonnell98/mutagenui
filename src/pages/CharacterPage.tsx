import Details from '../components/character/Details';
import React, { useEffect, useState } from 'react';
import RaceDetails from '../components/RaceDetails';
import Traits from '../components/character/Traits';
import { fetchCharacter } from '../services/characterService';
import { Character } from '../types/Character';
import { useParams } from 'react-router-dom';
import Skills from '../components/character/Skills';

const CharacterPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    const fetchCharacterData = async () => {
      const data = await fetchCharacter(parseInt(id!));
      setCharacter(data);
    };

    fetchCharacterData();
  }, [id]);

  return (
    <div className="w-100 bg-gray-800 text-white h-screen p-5">
      <div className='w-100 p-5 flex justify-start space-x-5'>
        <Details character={character} />
        <RaceDetails character={character} />
        <Traits character={character} />
        <Skills character={character} />
      </div>
    </div>
  );
};

export default CharacterPage;