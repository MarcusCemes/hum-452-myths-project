import { writable } from "svelte/store";

import type { Scene } from "./types";

export type History = Scene[];

export const history = writable<History>([]);

export function pushHistory(scene: Scene) {
  history.update((h) => [...h, scene]);
}
