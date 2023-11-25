interface CharacterAttribute {
  value: number;
  category: string | null;
}

export interface Character {
  name: string;
  description: string;
  race_id: number;
  current_health: number;
  level: number;
  character_attributes: {
    [key: string]: CharacterAttribute;
  };
  race: {
    [key: string]: string;
  };
}
