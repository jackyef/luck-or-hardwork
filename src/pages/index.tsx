import { VariablesForm } from '@/components/VariablesForm/VariablesForm';

type Person = {
  skill: number;
  luck: number;
};

const createPerson = (): Person => {
  return {
    skill: Math.round(Math.random() * 100),
    luck: Math.round(Math.random() * 100),
  };
};

const getTop10 = (people: Person[], luckFactor: number): Person[] => {
  const skillFactor = 100 - luckFactor;
  const sortedPeople = [...people];

  console.log({ skillFactor, luckFactor });

  sortedPeople.sort((a, b) => {
    const scoreA = a.skill * skillFactor + a.luck * luckFactor;
    const scoreB = b.skill * skillFactor + b.luck * luckFactor;

    return scoreB - scoreA;
  });

  // console.log({ sortedPeople, top10: sortedPeople.slice(0, 10) });
  console.log('top10');
  sortedPeople.slice(0, 10).forEach((v) => console.log(v));

  return sortedPeople.slice(0, 10);
};

export default function Home() {
  return (
    <div>
      {/* Some dialogs */}

      {/* Setup variables */}

      <VariablesForm
        onSubmit={({ population, luckFactor }) => {
          const people = [];

          for (let i = 0; i < population; i += 1) {
            people.push(createPerson());
          }

          getTop10(people, luckFactor);
        }}
      />

      {/* Generate people */}

      {/* Get top 10 people */}
    </div>
  );
}
