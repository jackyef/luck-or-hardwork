import { useState } from 'react';
import { Journey } from '@/components/Journey/Journey';
import { Step1 } from '@/components/Steps/Step1';
import { Step2 } from '@/components/Steps/Step2';

export default function Home() {
  const [step, setStep] = useState(1);

  return (
    <div>
      {/* Some dialogs */}

      <Journey
        step={step}
        renderStep={(currentStep) => {
          if (currentStep === 1) {
            return (
              <Step1 onSetStep={setStep} />
            );
          }

          if (currentStep === 2) {
            return (
              <Step2 onSetStep={setStep} />
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
