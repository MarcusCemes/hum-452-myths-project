export interface Scene {
  id: string;
  choices: Choice[];
}

export interface Choice {
  target: string;
  text: string;
}
