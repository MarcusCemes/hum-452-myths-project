import { writable } from "svelte/store";

import type { Scene } from "./types";

export type History = Scene[];

export const history = writable<History>([]);

export function pushSceneToHistory(scene: Scene) {
  history.update((h) => [...h, scene]);
}
