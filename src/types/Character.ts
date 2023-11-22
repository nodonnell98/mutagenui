export interface Character {
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
