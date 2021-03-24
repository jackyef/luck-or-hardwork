export const commonTransition = {
  initial: { x: 300, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -300, opacity: 0 },
  transition: {
    x: { type: 'spring', stiffness: 300, damping: 25 },
    opacity: { duration: 0.2 },
  },
}