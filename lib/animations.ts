import { Variants } from "framer-motion";

/* ---------------------------------------------------------- */
/* Configuration commune                                       */
/* ---------------------------------------------------------- */

export const viewport = {
  once: true,
  amount: 0.2,
};

export const defaultTransition = {
  duration: 0.6,
  ease: [0.25, 0.1, 0.25, 1] as const,
};

/* ---------------------------------------------------------- */
/* Fade Up                                                     */
/* ---------------------------------------------------------- */

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

/* ---------------------------------------------------------- */
/* Fade Down                                                   */
/* ---------------------------------------------------------- */

export const fadeDown: Variants = {
  hidden: {
    opacity: 0,
    y: -40,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

/* ---------------------------------------------------------- */
/* Fade Left                                                   */
/* ---------------------------------------------------------- */

export const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

/* ---------------------------------------------------------- */
/* Fade Right                                                  */
/* ---------------------------------------------------------- */

export const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

/* ---------------------------------------------------------- */
/* Zoom                                                        */
/* ---------------------------------------------------------- */

export const zoomIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: defaultTransition,
  },
};

/* ---------------------------------------------------------- */
/* Rotate                                                      */
/* ---------------------------------------------------------- */

export const rotateIn: Variants = {
  hidden: {
    opacity: 0,
    rotate: -8,
    scale: 0.95,
  },

  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: defaultTransition,
  },
};

/* ---------------------------------------------------------- */
/* Hero                                                        */
/* ---------------------------------------------------------- */

export const heroContent: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.9,
      staggerChildren: 0.15,
    },
  },
};

export const heroItem: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

/* ---------------------------------------------------------- */
/* Container                                                   */
/* ---------------------------------------------------------- */

export const staggerContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* ---------------------------------------------------------- */
/* Card                                                        */
/* ---------------------------------------------------------- */

export const card: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

/* ---------------------------------------------------------- */
/* Statistics                                                  */
/* ---------------------------------------------------------- */

export const stat: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.5,
    },
  },
};

/* ---------------------------------------------------------- */
/* Timeline                                                    */
/* ---------------------------------------------------------- */

export const timelineItem: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

/* ---------------------------------------------------------- */
/* Hover                                                       */
/* ---------------------------------------------------------- */

export const hoverLift = {
  whileHover: {
    y: -10,
    transition: {
      duration: 0.25,
    },
  },
};

export const hoverScale = {
  whileHover: {
    scale: 1.05,
    transition: {
      duration: 0.25,
    },
  },
};

export const hoverRotate = {
  whileHover: {
    rotate: 5,
    scale: 1.05,

    transition: {
      duration: 0.25,
    },
  },
};

/* ---------------------------------------------------------- */
/* Boutons                                                     */
/* ---------------------------------------------------------- */

export const buttonHover = {
  whileHover: {
    scale: 1.05,
  },

  whileTap: {
    scale: 0.96,
  },
};

/* ---------------------------------------------------------- */
/* Icônes                                                      */
/* ---------------------------------------------------------- */

export const iconHover = {
  whileHover: {
    rotate: 8,
    scale: 1.1,
  },

  transition: {
    duration: 0.25,
  },
};

/* ---------------------------------------------------------- */
/* Export global                                               */
/* ---------------------------------------------------------- */

export const animation = {
  viewport,

  defaultTransition,

  fadeUp,
  fadeDown,
  fadeLeft,
  fadeRight,

  zoomIn,
  rotateIn,

  heroContent,
  heroItem,

  staggerContainer,

  card,
  stat,
  timelineItem,

  hoverLift,
  hoverScale,
  hoverRotate,

  buttonHover,
  iconHover,
};