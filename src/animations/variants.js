export const navVariant = {
  visible: {
    opacity: 1,
    y: 0,
    display: "flex",
  },
  hidden: {
    opacity: 0,
    y: -25,
    display: "none",
  },
};

export const hideTitle = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
    transition: {
      type: "spring",
      bounce: 0.1,
      duration: 1.2,
    },
  },
};

export const top = {
  open: {
    opacity: [0, 1],
    rotate: 180,
  },
  closed: {
    opacity: 1,
  },
};

export const center = {
  open: {
    opacity: 0,
    width: "2.5rem",
  },
  closed: {
    opacity: 1,
  },
};

export const bottom = {
  open: {
    opacity: [0, 1],
    rotate: -180,
    width: "1.5rem",
  },
  closed: {
    opacity: 1,
  },
};

export const cardOnScroll = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
