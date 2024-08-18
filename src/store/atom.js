import { atom, selector } from "recoil";

export const wordsAtom = atom({
  key: "noofwords",
  default: 0,
});

export const paraGraph = selector({
  key: "paragraph",
  get: ({ get }) => {
    const numwords = get(wordsAtom);
    const words = [
      "lorem",
      "ipsum",
      "dolor",
      "sit",
      "amet",
      "consectetur",
      "adipiscing",
      "elit",
      "sed",
      "do",
      "eiusmod",
      "tempor",
      "incididunt",
      "ut",
      "labore",
      "et",
      "dolore",
      "magna",
      "aliqua",
      "ut",
      "enim",
      "ad",
      "minim",
      "veniam",
      "quis",
      "nostrud",
      "exercitation",
      "ullamco",
      "laboris",
      "nisi",
      "ut",
      "aliquip",
      "ex",
      "ea",
      "commodo",
      "consequat",
    ];

    let generatedWords = [];
    for (let i = 0; i < numwords; i++) {
      const randomIndex = Math.floor(Math.random() * words.length);
      generatedWords.push(words[randomIndex]);
    }

    return generatedWords.join(" ") + ".";
  },
});
