import { Journey } from '@/components/Journey/Journey';
import { Step1 } from '@/components/Steps/Step1';
import { Step2 } from '@/components/Steps/Step2';
import { Step3 } from '@/components/Steps/Step3';
import { Step4 } from '@/components/Steps/Step4';
import { Step5 } from '@/components/Steps/Step5';
import { Step6 } from '@/components/Steps/Step6';

export default function Home() {
  return (
    <div>
      <Journey
        renderPages={(currentPage, callbacks) => {
          if (currentPage === 0) {
            return <Step1 {...callbacks} />;
          }

          if (currentPage === 1) {
            return <Step2 {...callbacks} />;
          }

          if (currentPage === 2) {
            return <Step3 {...callbacks} />;
          }

          if (currentPage === 3) {
            return <Step4 {...callbacks} />;
          }

          if (currentPage === 4) {
            return <Step5 {...callbacks} />;
          }

          if (currentPage === 5) {
            return <Step6 {...callbacks} />;
          }
        }}
      />
    </div>
  );
}
