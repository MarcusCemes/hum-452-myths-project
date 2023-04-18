import type { Scene } from "$lib/types";

export const script: Scene[] = [
  {
    id: "intro",
    choices: [
      {
        target: "banana",
        text: "🍌 Banana",
      },
      {
        target: "pasta",
        text: "🍝 Pasta",
      },
      {
        target: "ntm",
        text: "???",
      },
    ],
  },
  {
    id: "banana",
    choices: [
      {
        target: "intro",
        text: "Go back",
      },
    ],
  },
  {
    id: "pasta",
    choices: [
      {
        target: "intro",
        text: "Go back",
      },
    ],
  },
  {
    id: "ntm",
    choices: [
      {
        target: "intro",
        text: "Go back",
      },
    ],
  },
];

export function getScene(id: string): Scene | undefined {
  return script.find((scene) => scene.id === id);
}
