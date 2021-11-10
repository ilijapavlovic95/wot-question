const CHARACTERS = [
  {
    id: "r",
    code: "rand",
    name: "Rand",
    color: "#d63031",
  },
  {
    id: "e",
    code: "egwene",
    name: "Egwene",
    color: "#00b894",
  },
  {
    id: "n",
    code: "nynaeve",
    name: "Nynaeve",
    color: "#fdcb6e",
  },
  {
    id: "mc",
    code: "mat",
    name: "Mat",
    color: "#636e72",
  },
  {
    id: "md",
    code: "moiraine",
    name: "Moiraine",
    color: "#0984e3",
  },
  {
    id: "l",
    code: "lan",
    name: "Lan",
    color: "#b2bec3",
  },
  {
    id: "p",
    code: "perrin",
    name: "Perrin",
    color: "#ffeaa7",
  },
];

const ANSWERS = [
  // mat
  {
    character: "mc",
    answer: "Blood and bloody ashes, I don't know!",
  },
  {
    character: "mc",
    answer: "Ask Perrin or Rand. They'll know.",
  },
  // moiraine
  {
    character: "md",
    answer: "There are neither beginnings nor endings to the Wheel of Time.",
  },
  {
    character: "md",
    answer: "I'll tell you when the time comes.",
  },
  // lan
  {
    character: "l",
    answer: "...",
  },
  {
    character: "l",
    answer: ":days: days.",
  },
  // nynaeve
  {
    character: "n",
    answer: "Name yourself, stranger.",
  },
  {
    character: "n",
    answer: "It's Women's Circle business.",
  },
  // perrin
  {
    character: "p",
    answer: "Ask Mat or Rand. They'll know.",
  },
  {
    character: "p",
    answer: "It starts in :days: days. But give me a minute, just to check once more.",
  },
  // rand
  {
    character: "r",
    answer: "Who are you? Did you see my sheep?",
  },
  {
    character: "r",
    answer: "Ask Perrin or Mat. They'll know.",
  },
  // egwene
  {
    character: "e",
    answer: ":days: days and :hours: hours. Do you need minutes?",
  },
  {
    character: "e",
    answer: ":days: days, :hours: hours and :minutes: minutes. You don't want seconds? Why not?",
  },
  {
    character: "e",
    answer: ":days: days, :hours: hours, :minutes: minutes and :seconds: seconds",
  },
];

export { CHARACTERS, ANSWERS };
