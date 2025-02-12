const braceletIdField = document.querySelector("#braceletID");
const submitButton = document.querySelector(".btn-submit");
const nameLabel = document.querySelector("#name");
let username = "Enter your name here";

function randomBraceletId() {
  braceletIdField.innerHTML = Math.floor(Math.random() * 1_000_000_000);
}

document.addEventListener("DOMContentLoaded", () => {
  randomBraceletId();
  nameLabel.placeholder = username;
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

submitButton.addEventListener("click", () => {
  // regex check the username to make sure it's not empty
  const nameRegex = /^[a-zA-Z\s]+$/;
  if (!nameRegex.test(nameLabel.value)) {
    clickButtonSubmit(submitButton);
    nameLabel.style.border = "4px solid red";
    submitButton.innerHTML = "Invalid Name";
    setTimeout(() => {
      nameLabel.style.border = "none";
      submitButton.innerHTML = "Save Changes";
    }, 1400);
    return;
  }

  clickButtonSubmit(submitButton);

  username = nameLabel.value;
  setTimeout(() => {
    // make a popup appear notifying thta you have successfully submitted the form
    const confirmNotification = document.createElement("div");
    confirmNotification.classList.add("poke-notification");
    // style it
    confirmNotification.style.position = "absolute";
    confirmNotification.style.top = "80%";
    confirmNotification.style.left = "50%";
    confirmNotification.style.transform = "translate(-50%, -50%)";
    confirmNotification.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    confirmNotification.style.color = "white";
    confirmNotification.style.padding = "1rem";
    confirmNotification.style.borderRadius = "1rem";
    confirmNotification.style.zIndex = "9999";

    confirmNotification.textContent = "Saved Changes!";
    document.body.appendChild(confirmNotification);
  }, 200);
});
