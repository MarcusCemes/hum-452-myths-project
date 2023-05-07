export type Clip = { id: string; src?: string };
export type Action = { choices: Choice[]; prompt?: string } | { then: string };
export type Scene = Clip & Action;

export type Choice = {
  target: string;
  text: string;
};
