import React from 'react';
import { Character } from '../../types/Character';

interface DetailsProps {
  character: Character | null;
}

const Details: React.FC<DetailsProps> = ({ character }) => {
  return (
    <div className='p-2 border-teal-300 border-2 rounded-md bg-slate-700'>
      <h2>{character?.name}</h2>
      <p>{character?.description}</p>
      <p>Current Health: {character?.current_health}</p>
      <p>Level: {character?.level}</p>
    </div>
  );
};

export default Details;