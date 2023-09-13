export const delayAnimation = 1;
export const animationVariant = {
  hidden: {
    opacity: 0,
    scaleX: 1,
  },
  leftOrigin: { transformOrigin: "left", scaleX: 0 },
  rightOrigin: { transformOrigin: "right", scaleX: 0 },

  animate: {
    display: "block",
    scaleX: [0, 1, 0],
  },
  exit: {
    scaleX: [0, 1, 0],
    delay: 2,
  },
};
