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
  hidden: { opacity: 0 },
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
