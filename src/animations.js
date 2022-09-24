export const pageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.25
    }
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.25
    }
  }
};

export const zoomIn = {
  hidden: {
    opacity: 0,
    scale: 0
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.25,
      type: "spring"
    }
  }
};

export const slideLeft = {
  hidden: {
    x: "-100vw"
  },
  show: {
    x: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
      type: "spring",
      stiffness: 50
    }
  }
};

export const slideRight = {
  hidden: {
    x: "100vw"
  },
  show: {
    x: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
      type: "spring",
      stiffness: 50
    }
  }
};
