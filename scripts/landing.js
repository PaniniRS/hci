const addAvatarCard = document.querySelector("#addCard");
const settingsButton = document.querySelector(".settings");

// disable selection on document
document.addEventListener("selectstart", (e) => e.preventDefault());

//add card
addAvatarCard.addEventListener("click", () => {
  addAvatarCard.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(0.9)" },
      { transform: "scale(1)" },
    ],
    {
      duration: 100,
      easing: "ease-in-out",
      iterations: 1,
    }
  );

  const card = document.createElement("div");
  card.classList.add("card");
  card.animate([{ transform: "scale(0)" }, { transform: "scale(1)" }], {
    duration: 180,
    easing: "ease-in-out",
    iterations: 1,
  });

  addAvatarCard.parentElement.appendChild(card);
});

//settings
settingsButton.addEventListener("click", () => {
  settingsButton.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(0.9)" },
      { transform: "scale(1)" },
    ],
    {
      duration: 100,
      easing: "ease-in-out",
      iterations: 1,
    }
  );

  window.location.href = "../settings.html";
});
