import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../services/characterService';
import { Character } from '../types/Character';
import { Link } from 'react-router-dom';

export default function Characters() {
  const [characters, setCharacters] = useState<Character[] | null>(null);

  useEffect(() => {
    const fetchCharacterData = async () => {
      const data = await fetchCharacters();
      setCharacters(data);
    };

    fetchCharacterData();
  }, []);

  return (
    <div className='h-screen p-5 flex justify-start flex-col items-center'>
      <h1 className='font-mono text-4xl text-white mt-12'>Characters</h1>
      {characters && (
        <ul className='w-100 mt-5 grid grid-cols-4 gap-4'>
          {characters.map((character) => (
            <Link to={`/character/${character.id}`} className='text-white flex justify-center items-center border-solid border-2 border-teal-300 rounded-xl bg-teal-800 hover:scale-105 cursor-pointer p-3' key={character.name}>{character.name}</Link>
          ))}
        </ul>
      )}
    </div>
  );
}
