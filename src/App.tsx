import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

interface Character {
  name: string;
  description: string;
  race_id: number;
  current_health: number;
  level: number;
  skills: {
    [key: string]: string;
  };
  traits: {
    [key: string]: string;
  };
  race: {
    [key: string]: string;
  };
}

function App(): JSX.Element {
  const [character, setCharacter] = React.useState<Character | null>(null);
  useEffect(() => { 
    fetch('http://localhost:3000/characters/1')
      .then(response => response.json())
      .then((data: Character) => setCharacter(data))
  }, []);
  return (
    <div className="">
      <header className="">
        <h1>Mutagen</h1>
      </header>
      <div>
        <h2>{character?.name}</h2>
        <p>{character?.description}</p>
        <p>Health: {character?.current_health}</p>
        <p>Level: {character?.level}</p>
        
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
        <div>
          <h3>Traits:</h3>
          <ul>
            {character?.traits && Object.entries(character.traits).map(([trait, value]) => (
              <li key={trait}>
                {trait}: {value}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Skills:</h3>
          <ul>
            {character?.skills && Object.entries(character.skills).map(([skill, proficiency]) => (
              <li key={skill}>
                {skill}: {proficiency}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
