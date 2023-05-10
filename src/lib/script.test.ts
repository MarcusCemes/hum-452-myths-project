import { describe, expect, it } from "vitest";

import { MEDIA_URL } from "./config";
import { getScene, script } from "./script";
import type { Scene } from "./types";

describe("script", () => {
  it.each(script.map((scene) => [scene.id, scene]))(
    "%s should have a valid source",
    async (_, scene) => {
      const { status } = await fetch(`${MEDIA_URL}/${scene.src}.mp4`);
      expect(status, `Source not found: ${scene.src}`).toBe(200);
    }
  );

  it.each(script.map((scene) => [scene.id, scene]))(
    "%s should point to valid targets",
    (_, scene) => {
      if ("choices" in scene) {
        scene.choices.forEach((choice) => {
          expect(script.some((scene) => scene.id === choice.target)).toBe(true);
        });
      } else if ("then" in scene) {
        expect(script.some((sceneB) => sceneB.id === scene.then)).toBe(true);
      }
    }
  );

  const accessibleids = traverseAccessibleIds();

  it.each(script.map((scene) => scene.id))("%s should be accessible", (id) => {
    expect(accessibleids.has(id)).toBe(true);
  });

  function traverseAccessibleIds(): Set<string> {
    const foundScenes = new Set<string>();

    const queue = [script[0]];
    let scene: Scene | undefined;

    while ((scene = queue.pop()) !== undefined) {
      foundScenes.add(scene.id);

      if ("choices" in scene) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        queue.push(
          ...scene.choices
            .map((choice) => getScene(choice.target))
            .filter((scene): scene is Scene => Boolean(scene))
        );
      } else if ("then" in scene) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        queue.push(getScene(scene.then)!);
      }
    }

    return foundScenes;
  }
});
