import { Journey } from '@/components/Journey/Journey';
import { Step1 } from '@/components/Steps/Step1';
import { Step2 } from '@/components/Steps/Step2';
import { Step3 } from '@/components/Steps/Step3';

export default function Home() {
  return (
    <div>
      {/* Some dialogs */}

      <Journey
        renderPages={(currentPage, callbacks) => {
          if (currentPage === 0) {
            return (
              <Step1 {...callbacks} />
            );
          }

          if (currentPage === 1) {
            return (
              <Step2 {...callbacks} />
            );
          }

          if (currentPage === 2) {
            return (
              <Step3 {...callbacks} />
            );
          }
        }}
      />

      {/* Setup variables */}

      {/* <VariablesForm
        onSubmit={({ population, luckFactor }) => {
          const people = [];

          for (let i = 0; i < population; i += 1) {
            // generate people
            people.push(createPerson());
          }

          // get top 10 people
          console.log(getTopNPerson(people, luckFactor, 10));
        }}
      /> */}
    </div>
  );
}
