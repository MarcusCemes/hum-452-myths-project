import { getScene } from "$lib/script.js";
import { error } from "@sveltejs/kit";

export const load = ({ params }) => ({
  scene: loadScene(params.id),
  title: "Story",
});

function loadScene(id: string) {
  const scene = getScene(id);

  if (!scene) {
    throw error(404);
  }

  return scene;
}
