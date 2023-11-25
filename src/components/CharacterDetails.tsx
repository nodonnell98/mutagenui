import React from 'react';
import { Character } from '../types/Character';

interface CharacterDetailsProps {
  character: Character | null;
}

const CharacterDetails: React.FC<CharacterDetailsProps> = ({ character }) => {
  return (
    <div className='p-2 border-teal-300 border-2 rounded-md bg-slate-700'>
      <h2>{character?.name}</h2>
      <p>{character?.description}</p>
      <p>Health: {character?.current_health}</p>
      <p>Level: {character?.level}</p>
    </div>
  );
};

export default CharacterDetails;