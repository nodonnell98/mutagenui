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

export const fetchCharacter = async (characterId: number): Promise<Character> => {
  const response = await fetch(`http://localhost:3000/characters/${characterId}`);
  const data = await response.json();
  return data;
};
