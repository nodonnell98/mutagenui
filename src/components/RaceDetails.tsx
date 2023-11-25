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
        <li>{character?.race && character.race.name}</li>
    </ul>
  </div>
  );
};

export default RaceDetails;