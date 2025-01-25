const braceletIdField = document.querySelector("#braceletID");
const submitButton = document.querySelector(".btn-submit");

function randomBraceletId() {
  braceletIdField.value = Math.floor(Math.random() * 1_000_000_000);
}

document.addEventListener("DOMContentLoaded", () => {
  braceletIdField.placeholder = randomBraceletId();
});

const clickButtonSubmit = (button) => {
  button.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(0.8)" },
      { transform: "scale(1)" },
    ],
    {
      duration: 180,
      iterations: 1,
    }
  );
};
