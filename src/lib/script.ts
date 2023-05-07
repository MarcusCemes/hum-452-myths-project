import type { Action, Choice, Scene } from "$lib/types";

const classroomChoices: Action = {
  prompt: "Which text would you like a reminder of?",
  choices: [
    { target: "classroom-bible", text: "Bible" },
    { target: "classroom-ovide", text: "Ovide" },
    { target: "classroom-superwise", text: "Superwise" },
  ],
};

const meetupChoices: Action = {
  choices: [
    { target: "panic-violence", text: "💪 Violence route" },
    { target: "panic-ecology", text: "🌱 Ecology route" },
  ],
};

const violenceChoices: Action = {
  prompt: "Do you listen to the scientist?",
  choices: [
    { target: "panic-ecology-transition", text: "Yes (🌱 ecology route)" },
    { target: "panic-violence-ending", text: "No (💪 violence route)" },
  ],
};

const ecologyChoices: Action = {
  prompt: "Should we put a banana skin in his path?",
  choices: [
    { target: "panic-ecology-ending", text: "Yes" },
    { target: "panic-violence-transition", text: "No" },
  ],
};

const violenceEndingChoices: Action = {
  prompt: "Should there be an AI uprising?",
  choices: [
    { target: "", text: "Yes" },
    { target: "", text: "No" },
  ],
};

const ecologyEndingChoices: Action = {
  prompt: "Does the carrot contain a deadly virus?",
  choices: [
    { target: "", text: "Yes" },
    { target: "", text: "No" },
  ],
};

export const script: Scene[] = [
  { id: "prelude", src: "0-prelude", then: "corridor" },
  { id: "corridor", src: "1-corridor", ...classroomChoices },
  { id: "classroom-bible", src: "1-classroom", then: "bible" },
  { id: "classroom-ovide", src: "1-classroom", then: "ovide" },
  { id: "classroom-superwise", src: "1-classroom", then: "superwise" },
  { id: "bible", src: "2-bible", then: "meetup" },
  { id: "ovide", src: "2-ovide", then: "meetup" },
  { id: "superwise", src: "2-superwise", then: "meetup" },

  { id: "meetup", src: "3-meetup", ...meetupChoices },
  { id: "panic-violence", src: "4V-panic", ...violenceChoices },
  { id: "panic-ecology", src: "4E-panic", ...ecologyChoices },

  { id: "panic-violence-ending", src: "5V-panic-ending", ...violenceEndingChoices },
  { id: "panic-ecology-ending", src: "5E-panic-ending", ...ecologyEndingChoices },
  { id: "panic-violence-transition", src: "5TV-panic-ending", ...violenceEndingChoices },
  { id: "panic-ecology-transition", src: "5TE-panic-ending", ...ecologyEndingChoices },

  // {
  //   id: "intro",
  //   choices: [
  //     {
  //       target: "banana",
  //       text: "🍌 Banana",
  //     },
  //     {
  //       target: "pasta",
  //       text: "🍝 Pasta",
  //     },
  //     {
  //       target: "ntm",
  //       text: "???",
  //     },
  //   ],
  // },
  // {
  //   id: "banana",
  //   choices: [
  //     {
  //       target: "intro",
  //       text: "Go back",
  //     },
  //   ],
  // },
  // {
  //   id: "pasta",
  //   choices: [
  //     {
  //       target: "intro",
  //       text: "Go back",
  //     },
  //   ],
  // },
  // {
  //   id: "ntm",
  //   choices: [
  //     {
  //       target: "intro",
  //       text: "Go back",
  //     },
  //   ],
  // },
];

export function getScene(id: string): Scene | undefined {
  return script.find((scene) => scene.id === id);
}
