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
    answer: "Dovie'andi se tovya sagain.",
  },
  {
    character: "mc",
    answer: "I told you I don't know. They could put up a warning sign or something.",
  },
  {
    character: "mc",
    answer: "Ask Perrin or Rand. They'll know.",
  },
  // moiraine
  {
    character: "md",
    answer: "The Wheel weaves as the Wheel wills.",
  },
  {
    character: "md",
    answer: "There are neither beginnings nor endings to the Wheel of Time.",
  },
  {
    character: "md",
    answer: "I'll tell you when time comes.",
  },
  {
    character: "md",
    answer: "It's going to start this year.",
  },
  // lan
  {
    character: "l",
    answer: "...",
  },
  {
    character: "l",
    answer: "... !",
  },
  {
    character: "l",
    answer: "... !?",
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
  {
    character: "n",
    answer: "Why are you keep asking me that!? Leave us alone.",
  },
  {
    character: "n",
    answer: "You still here!?",
  },
  // perrin
  {
    character: "p",
    answer: "Just to think about it...",
  },
  {
    character: "p",
    answer: "Ask Mat or Rand. They'll know.",
  },
  {
    character: "p",
    answer: "It starts in :days: days. But, give me a minute, just to check once more.",
  },
  {
    character: "p",
    answer: "Yeah, I was right. It starts in :days: days.",
  },
  // rand
  {
    character: "r",
    answer: "Who are you? Did you see my sheep?",
  },
  {
    character: "r",
    answer: "The Wheel of time? I don't care about it.",
  },
  {
    character: "r",
    answer: "Story about the Dragon Reborn? Check the Prophecies.",
  },
  {
    character: "r",
    answer: "Ask Perrin or Mat. They'll know.",
  },
  // egwene
  {
    character: "e",
    answer: ":days: days. Do you need hours?",
  },
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
