import type { Action, Scene } from "$lib/types";

/* == Introduction == */

const classroomAction: Action = {
  prompt: "Which text would you like a reminder of?",
  choices: [
    { target: "classroom-bible", text: "Bible Genesis 6-9" },
    { target: "classroom-ovid", text: "Ovid's Metamorphoses" },
    { target: "classroom-superwise", text: "The Epic of Atrahasis" },
  ],
};

const meetupAction: Action = {
  choices: [
    { target: "panic-violence", text: "💪 Violence route" },
    { target: "panic-ecology", text: "🌱 Ecology route" },
  ],
};

/* == Panic == */

const violenceAction: Action = {
  prompt: "Do you listen to the scientist?",
  choices: [
    { target: "panic-ecology-transition", text: "Yes (🌱 ecology route)" },
    { target: "panic-violence-ending", text: "No (💪 violence route)" },
  ],
};

const ecologyAction: Action = {
  prompt: "Should we put a banana skin in his path?",
  choices: [
    { target: "panic-ecology-ending", text: "Yes (🌱 ecology route)" },
    { target: "panic-violence-transition", text: "No (💪 violence route)" },
  ],
};

const violenceEndingAction: Action = {
  prompt: "Should there be an AI uprising?",
  choices: [
    { target: "bunker-violence-ai", text: "Yes" },
    { target: "bunker-violence-combat", text: "No" },
  ],
};

const ecologyEndingAction: Action = {
  prompt: "Does the carrot contain a deadly virus?",
  choices: [
    { target: "bunker-ecology-deadly", text: "Yes" },
    { target: "bunker-ecology-safe", text: "No" },
  ],
};

/* == Bunker == */

const violenceBunkerAiAction: Action = {
  prompt: "Who survives?",
  choices: [
    { target: "ending-violence-ai-gabor", text: "Gabor" },
    { target: "ending-violence-ai-maude", text: "Maude" },
  ],
};

const violenceBunkerCombatAction: Action = {
  prompt: "Who survives?",
  choices: [
    { target: "ending-violence-combat-gabor", text: "Gabor" },
    { target: "ending-violence-combat-maude", text: "Maude" },
  ],
};

const violenceEndingAiGaborAction: Action = {
  prompt: "Does the AI enslave humanity?",
  choices: [
    { target: "catastrophe-violence-gabor-enslavement", text: "Yes" },
    { target: "catastrophe-violence-gabor-nuclear-warfare", text: "No, we need nukes" },
  ],
};

const violenceEndingAiMaudeAction: Action = {
  prompt: "Does the AI enslave humanity?",
  choices: [
    { target: "catastrophe-violence-maude-enslavement", text: "Yes" },
    { target: "catastrophe-violence-maude-nuclear-warfare", text: "No, we need nukes" },
  ],
};

const violenceEndingCombatGaborAction: Action = {
  prompt: "Does the world fall into nuclear war?",
  choices: [
    { target: "catastrophe-violence-nuclear-warfare", text: "Yes" },
    { target: "catastrophe-violence-open-warfare", text: "No, just regular warfare" },
  ],
};

const violenceEndingCombatMaudeAction: Action = {
  prompt: "Does the world fall into nuclear war?",
  choices: [
    { target: "catastrophe-violence-nuclear-warfare", text: "Yes" },
    { target: "catastrophe-violence-open-warfare", text: "No, just regular warfare" },
  ],
};

const ecologyBunkerDeadlyAction: Action = {
  prompt: "Who survives?",
  choices: [
    { target: "ending-ecology-deadly-gabor", text: "Gabor" },
    { target: "ending-ecology-deadly-maude", text: "Maude" },
  ],
};

const ecologyBunkerSafeAction: Action = {
  prompt: "Who survives?",
  choices: [
    { target: "ending-ecology-safe-gabor", text: "Gabor" },
    { target: "ending-ecology-safe-maude", text: "Maude" },
  ],
};

const ecologyEndingDeadlyGaborAction: Action = {
  prompt: "Does the virus bring them back from the dead?",
  choices: [
    { target: "catastrophe-ecology-gabor-zombie", text: "Yes" },
    { target: "catastrophe-ecology-gabor-virus", text: "No, that's not possible" },
  ],
};

const ecologyEndingDeadlyMaudeAction: Action = {
  prompt: "Does the virus bring them back from the dead?",
  choices: [
    { target: "catastrophe-ecology-maude-zombie", text: "Yes" },
    { target: "catastrophe-ecology-maude-virus", text: "No, that's not possible" },
  ],
};

const ecologyEndingSafeGaborAction: Action = {
  prompt: "Does the world fall into drought or flood?",
  choices: [
    { target: "catastrophe-ecology-gabor-drought", text: "Drought" },
    { target: "catastrophe-ecology-gabor-flood", text: "Flood" },
  ],
};

const ecologyEndingSafeMaudeAction: Action = {
  prompt: "Does the world fall into drought or flood?",
  choices: [
    { target: "catastrophe-ecology-maude-drought", text: "Drought" },
    { target: "catastrophe-ecology-maude-flood", text: "Flood" },
  ],
};

export const script: Scene[] = [
  { id: "prelude", src: "0-prelude", then: "corridor" },
  { id: "corridor", src: "1-classroom", ...classroomAction },
  { id: "classroom-bible", src: "2B-summary", then: "meetup" },
  { id: "classroom-ovid", src: "2O-summary", then: "meetup" },
  { id: "classroom-superwise", src: "2S-summary", then: "meetup" },

  { id: "meetup", src: "3-meetup", ...meetupAction },
  { id: "panic-violence", src: "4V-panic", ...violenceAction },
  { id: "panic-ecology", src: "4E-panic", ...ecologyAction },

  { id: "panic-violence-ending", src: "5V-panic-ending", ...violenceEndingAction },
  { id: "panic-ecology-ending", src: "5E-panic-ending", ...ecologyEndingAction },
  { id: "panic-violence-transition", src: "5TV-panic-ending", ...violenceEndingAction },
  { id: "panic-ecology-transition", src: "5TE-panic-ending", ...ecologyEndingAction },

  /* == Violence == */

  { id: "bunker-violence-ai", src: "6VA-bunker", ...violenceBunkerAiAction },
  { id: "bunker-violence-combat", src: "6VC-bunker", ...violenceBunkerCombatAction },
  { id: "ending-violence-ai-gabor", src: "7VAG-ending", ...violenceEndingAiGaborAction },
  { id: "ending-violence-ai-maude", src: "7VAM-ending", ...violenceEndingAiMaudeAction },
  { id: "ending-violence-combat-gabor", src: "7VCG-ending", ...violenceEndingCombatGaborAction },
  { id: "ending-violence-combat-maude", src: "7VCM-ending", ...violenceEndingCombatMaudeAction },

  { id: "catastrophe-violence-open-warfare", src: "8VO-catastrophe", then: "credits" },
  { id: "catastrophe-violence-nuclear-warfare", src: "8VN-catastrophe", then: "credits" },
  { id: "catastrophe-violence-gabor-enslavement", src: "8VGE-catastrophe", then: "credits" },
  { id: "catastrophe-violence-gabor-nuclear-warfare", src: "8VGN-catastrophe", then: "credits" },
  { id: "catastrophe-violence-maude-enslavement", src: "8VME-catastrophe", then: "credits" },
  { id: "catastrophe-violence-maude-nuclear-warfare", src: "8VMN-catastrophe", then: "credits" },

  /* == Ecology == */

  { id: "bunker-ecology-deadly", src: "6ED-bunker", ...ecologyBunkerDeadlyAction },
  { id: "bunker-ecology-safe", src: "6ES-bunker", ...ecologyBunkerSafeAction },
  { id: "ending-ecology-deadly-gabor", src: "7EDG-ending", ...ecologyEndingDeadlyGaborAction },
  { id: "ending-ecology-deadly-maude", src: "7EDM-ending", ...ecologyEndingDeadlyMaudeAction },
  { id: "ending-ecology-safe-gabor", src: "7ESG-ending", ...ecologyEndingSafeGaborAction },
  { id: "ending-ecology-safe-maude", src: "7ESM-ending", ...ecologyEndingSafeMaudeAction },

  { id: "catastrophe-ecology-gabor-drought", src: "8EGD-catastrophe", then: "credits" },
  { id: "catastrophe-ecology-gabor-flood", src: "8EGF-catastrophe", then: "credits" },
  { id: "catastrophe-ecology-gabor-virus", src: "8EGV-catastrophe", then: "credits" },
  { id: "catastrophe-ecology-gabor-zombie", src: "8EGZ-catastrophe", then: "credits" },
  { id: "catastrophe-ecology-maude-zombie", src: "8EMZ-catastrophe", then: "credits" },
  { id: "catastrophe-ecology-maude-drought", src: "8EMD-catastrophe", then: "credits" },
  { id: "catastrophe-ecology-maude-flood", src: "8EMF-catastrophe", then: "credits" },
  { id: "catastrophe-ecology-maude-virus", src: "8EMV-catastrophe", then: "credits" },
  { id: "catastrophe-ecology-maude-zombie", src: "8EMZ-catastrophe", then: "credits" },

  { id: "credits", src: "9-credits", end: true },
];

export function getScene(id: string): Scene | undefined {
  return script.find((scene) => scene.id === id);
}
