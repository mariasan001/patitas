import type { Variants } from 'framer-motion';

const baseTransition = {
  duration: 0.58,
  ease: 'easeOut',
} as const;

const quickTransition = {
  duration: 0.36,
  ease: 'easeOut',
} as const;

export const revealViewport = {
  once: true,
  amount: 0.22,
  margin: '0px 0px -8% 0px',
} as const;

export const createMotionPresets = (reduceMotion: boolean | null) => {
  const reduced = Boolean(reduceMotion);
  const transition = reduced ? { duration: 0 } : baseTransition;
  const quick = reduced ? { duration: 0 } : quickTransition;

  const sectionReveal: Variants = {
    hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition },
  };

  const fadeUp: Variants = {
    hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 14 },
    visible: { opacity: 1, y: 0, transition },
  };

  const cardReveal: Variants = {
    hidden: {
      opacity: reduced ? 1 : 0,
      y: reduced ? 0 : 16,
      scale: reduced ? 1 : 0.985,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition,
    },
  };

  const scaleSoft: Variants = {
    hidden: { opacity: reduced ? 1 : 0, scale: reduced ? 1 : 0.97 },
    visible: { opacity: 1, scale: 1, transition: quick },
  };

  const staggerContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduced ? 0 : 0.08,
        delayChildren: reduced ? 0 : 0.05,
      },
    },
  };

  const navReveal: Variants = {
    hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : -18 },
    visible: { opacity: 1, y: 0, transition: quick },
  };

  const footerReveal: Variants = {
    hidden: { opacity: reduced ? 1 : 0 },
    visible: { opacity: 1, transition },
  };

  return {
    sectionReveal,
    fadeUp,
    cardReveal,
    scaleSoft,
    staggerContainer,
    navReveal,
    footerReveal,
  };
};
