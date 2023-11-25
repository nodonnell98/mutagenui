import { Character } from '../types/Character';

export const fetchCharacter = async (characterId: number): Promise<Character> => {
  const response = await fetch(`http://localhost:3000/characters/${characterId}`);
  const data = await response.json();
  return data;
};

export const fetchCharacters = async () => {
  const response = await fetch(`http://localhost:3000/characters`);
  const data = await response.json();
  return data;
};
