export const slideUp = {
    initial: {
        y: "0"
    },
    exit: {
        y: "-100vh",
        transition: {duration: 0.8, ease:[0.7, 0, 0.3, 1], delay:1.5, when:"afterChildren"}
    }
}

export const fadeIn = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity:1,
        transition: {duration: 2, ease:[0, 0, 0.2, 1], delay:0}
    }
}

export const item = {
    hidden: { y:"100%", opacity: 0},
    visible: {
      y:0,
      opacity: 1,
      transition: {duration: 0.8, delay:0}
    }
  };