export const fadeUp = (delay = 0, y = 14) => ({
  hidden: { opacity: 0, y },
  show: { opacity: 1, y: 0, transition: { duration: .6, delay, ease: [0.22, 1, 0.36, 1] } }
});

export const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: .96 },
  show: { opacity: 1, scale: 1, transition: { duration: .6, delay, ease: [0.16, 1, 0.3, 1] } }
});

export const stagger = (staggerChildren = .08, delayChildren = .1) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } }
});
