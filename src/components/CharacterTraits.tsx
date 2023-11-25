import React from 'react';
import { Character } from '../types/Character';

interface CharacterTraitsProps {
  character: Character | null;
}

const CharacterTraits: React.FC<CharacterTraitsProps> = ({ character }) => {
  return (
    <div>
    <h3>Trait:</h3>
    <ul>
  {character?.character_attributes &&
    Object.entries(character.character_attributes)
      .filter(([, { category }]) => category === 'trait')
      .map(([attribute, { value }]) => (
        <li key={attribute}>
          {attribute}: {value}
        </li>
      ))}
</ul>


  </div>
  );
};

export default CharacterTraits;