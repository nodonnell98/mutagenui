import React from 'react';
import { Character } from '../types/Character';

interface RaceDetailsProps {
  character: Character | null;
}

const RaceDetails: React.FC<RaceDetailsProps> = ({ character }) => {
  return (
    <div>
    <h3>Race:</h3>
    <ul>
      {character?.race && Object.entries(character.race).map(([race, value]) => (
        <li key={race}>
          {race}: {value}
        </li>
      ))}
    </ul>
  </div>
  );
};

export default RaceDetails;