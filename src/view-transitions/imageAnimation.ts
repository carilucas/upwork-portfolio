export const imageAnimation = (pseudoElement: string) => {
  document
    .querySelector(".animatedMockup")
    ?.animate(
      [
        { opacity: 1, scale: 1, transform: "translateY(0)" },
        { opacity: 0, scale: 0.9, transform: "translateY(-100px)" },
      ],
      {
        duration: 500,
        easing: "cubic-bezier(0.76, 0, 0.24, 1)",
        fill: "forwards",
        pseudoElement: `::view-transition-old(${pseudoElement})`,
      }
    );

  document
    .querySelector(".animatedMockup")
    ?.animate(
      [
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1 },
      ],
      {
        duration: 500,
        easing: "cubic-bezier(0.76, 0, 0.24, 1)",
        fill: "forwards",
        pseudoElement: `::view-transition-new(${pseudoElement})`,
      }
    );
};
