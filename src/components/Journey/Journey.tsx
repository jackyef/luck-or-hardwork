import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface Props {
  step: number;
  renderStep: (step: number) => React.ReactNode;
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

export const Journey = ({ step, renderStep }: Props) => {
  const prevStep = useRef<number>(Number.MAX_SAFE_INTEGER);

  useEffect(() => {
    prevStep.current = step;
  }, [step]);

  const direction = prevStep.current > step ? 1 : -1;

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        key={step}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: 'spring', stiffness: 400, damping: 30 },
          opacity: { duration: 0.2 },
        }}
      >
        {renderStep(step)}
      </motion.div>
    </AnimatePresence>
  );
};
