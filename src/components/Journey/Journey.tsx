import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

interface Props {
  initialPage?: number
  renderPages: (currentPage: number, callbacks: {
    onNext: () => void
    onPrev: () => void
  }) => React.ReactNode;
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
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

export const Journey = ({ initialPage = 0, renderPages }: Props) => {
  const [[page, direction], setPage] = useState([initialPage, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <AnimatePresence exitBeforeEnter custom={direction} initial={false}>
      <motion.div
        key={page}
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
        {renderPages(page, {
          onNext: () => paginate(1),
          onPrev: () => paginate(-1)
        })}
      </motion.div>
    </AnimatePresence>
  );
};
