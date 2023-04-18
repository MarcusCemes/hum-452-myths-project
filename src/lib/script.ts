import type { Scene } from "$lib/types";

export const script: Scene[] = [
  {
    id: "intro",
    choices: [
      {
        target: "test-1",
        text: "Scene one",
      },
      {
        target: "test-2",
        text: "Scene two",
      },
    ],
  },
  {
    id: "test-1",
    choices: [
      {
        target: "intro",
        text: "Go back",
      },
    ],
  },
  {
    id: "test-2",
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
