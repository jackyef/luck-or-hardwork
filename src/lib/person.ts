export type Person = {
  skill: number;
  luck: number;
  // Emoji representing the person
  emoji: string;
};

const EMOJIS = [
  'đš',
  'đšâđŠ°',
  'đšâđŠ±',
  'đšâđŠł',
  'đšâđŠČ',
  'đ±ââïž',
  'đŽ',
  'đ©',
  'đ©âđŠ°',
  'đ©âđŠ±',
  'đ©âđŠł',
  'đ©âđŠČ',
  'đ±ââïž',
  'đ±ââïž',
  'đ”',
];

const getRandomEmoji = () => {
  return EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
};

export const createPerson = (): Person => {
  return {
    emoji: getRandomEmoji(),
    skill: Math.round(Math.random() * 100),
    luck: Math.round(Math.random() * 100),
  };
};

export const getTopNPerson = (
  people: Person[],
  luckFactor: number,
  n: number,
): Person[] => {
  const skillFactor = 100 - luckFactor;
  const sortedPeople = [...people];

  sortedPeople.sort((a, b) => {
    const scoreA = a.skill * skillFactor + a.luck * luckFactor;
    const scoreB = b.skill * skillFactor + b.luck * luckFactor;

    return scoreB - scoreA;
  });

  // console.log(`top ${n}`);
  // sortedPeople.slice(0, n).forEach((v) => console.log(v));

  return sortedPeople.slice(0, n);
};
