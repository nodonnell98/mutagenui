import React from 'react';
import { Character } from '../../types/Character';

interface TraitsProps {
  character: Character | null;
}

const Traits: React.FC<TraitsProps> = ({ character }) => {
  return (
    <div>
    <h3>Trait:</h3>
    <ul>
  {character?.character_attributes &&
    Object.entries(character.character_attributes)
      .filter(([, { category }]) => category === 'trait')
      .map(([attribute, { value }]) => (
        <li key={attribute}>
          {attribute}: {value} ({Math.floor(value / 2)}/{ Math.floor(value / 4)})
        </li>
      ))}
</ul>


  </div>
  );
};

export default Traits;