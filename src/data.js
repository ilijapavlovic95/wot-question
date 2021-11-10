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
    id: "mc1",
    character: "mc",
    answer: "Blood and bloody ashes, I don't know!",
  },
  {
    id: "mc2",
    character: "mc",
    answer: "Ask Perrin or Rand. They'll know.",
  },
  // moiraine
  {
    id: "md1",
    character: "md",
    answer: "There are neither beginnings nor endings to the Wheel of Time.",
  },
  {
    id: "md2",
    character: "md",
    answer: "I'll tell you when the time comes.",
  },
  // lan
  {
    id: "l1",
    character: "l",
    answer: "...",
  },
  {
    id: "l2",
    character: "l",
    answer: ":days: days.",
  },
  // nynaeve
  {
    id: "n1",
    character: "n",
    answer: "Name yourself, stranger.",
  },
  {
    id: "n2",
    character: "n",
    answer: "It's Women's Circle business.",
  },
  // perrin
  {
    id: "p1",
    character: "p",
    answer: "Ask Mat or Rand. They'll know.",
  },
  {
    id: "p2",
    character: "p",
    answer: "It starts in :days: days. But give me a minute, just to check once more.",
  },
  // rand
  {
    id: "r1",
    character: "r",
    answer: "Who are you? Did you see my sheep?",
  },
  {
    id: "r2",
    character: "r",
    answer: "Ask Perrin or Mat. They'll know.",
  },
  // egwene
  {
    id: "e1",
    character: "e",
    answer: ":days: days and :hours: hours. Do you need minutes?",
  },
  {
    id: "e2",
    character: "e",
    answer: ":days: days, :hours: hours and :minutes: minutes. You don't want seconds? Why not?",
  },
  {
    id: "e3",
    character: "e",
    answer: ":days: days, :hours: hours, :minutes: minutes and :seconds: seconds",
  },
];

export { CHARACTERS, ANSWERS };
