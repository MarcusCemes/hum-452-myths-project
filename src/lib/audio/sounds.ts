import { Howl } from "howler";

import clickSoundSrc from "./click.ogg";
import selectSoundSrc from "./select.ogg";

export const clickSound = new Howl({ src: clickSoundSrc, volume: 0.4 });
export const selectSound = new Howl({ src: selectSoundSrc, volume: 0.3 });
