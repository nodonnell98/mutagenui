import React from 'react';
import { Character } from '../../types/Character';

interface SkillProps {
  character: Character | null;
}

const Skill: React.FC<SkillProps> = ({ character }) => {
  return (
    <div>
    <h3>Skills:</h3>
    <ul>
  {character?.character_attributes &&
    Object.entries(character.character_attributes)
      .filter(([, { category }]) => category === 'skill')
      .map(([attribute, { value }]) => (
        <li key={attribute}>
          {attribute}: {value}
        </li>
      ))}
</ul>


  </div>
  );
};

export default Skill;