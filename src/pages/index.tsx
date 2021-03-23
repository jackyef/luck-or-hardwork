import { VariablesForm } from '@/components/VariablesForm/VariablesForm';
import { createPerson, getTopNPerson } from '@/lib/person';

export default function Home() {
  return (
    <div>
      {/* Some dialogs */}

      {/* Setup variables */}

      <VariablesForm
        onSubmit={({ population, luckFactor }) => {
          const people = [];

          for (let i = 0; i < population; i += 1) {
            // generate people
            people.push(createPerson());
          }

          // get top 10 people
          console.log(getTopNPerson(people, luckFactor, 10));
        }}
      />
    </div>
  );
}
