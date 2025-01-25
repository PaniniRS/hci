document.addEventListener("selectstart", (e) => e.preventDefault());

const backButton = document.querySelector(".backButton");

backButton.addEventListener("click", () => {
  clickButton(backButton);
  // go back
  window.history.back();
});

const clickButton = (button) => {
  button.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.1)" },
      { transform: "scale(1)" },
    ],
    {
      duration: 180,
      iterations: 1,
    }
  );
};
