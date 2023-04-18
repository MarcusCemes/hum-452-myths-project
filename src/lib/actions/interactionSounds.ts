import { clickSound, selectSound } from "$lib/audio/sounds";

export function interactionSounds(node: HTMLElement) {
  const handleHover = () => {
    clickSound.play();
  };

  const handleClick = () => {
    selectSound.play();
  };

  node.addEventListener("click", handleClick);
  node.addEventListener("mouseenter", handleHover);

  return {
    destroy: () => {
      node.removeEventListener("click", handleClick);
      node.removeEventListener("mouseenter", handleHover);
    },
  };
}
