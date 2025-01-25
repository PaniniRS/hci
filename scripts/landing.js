const addAvatarCard = document.querySelector("#addCard");
const momentsContainer = document.querySelector(".moments");
const membersContainer = document.querySelector(".members");
const settingsButton = document.querySelector(".settings");

const CARDMAX = 4;

// disable selection on document
document.addEventListener("selectstart", (e) => e.preventDefault());

//add card
addAvatarCard.addEventListener("click", () => {
  if (!(document.querySelectorAll("#avatarCard").length >= CARDMAX)) {
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
    card.id = "avatarCard";
    card.animate([{ transform: "scale(0)" }, { transform: "scale(1)" }], {
      duration: 180,
      easing: "ease-in-out",
      iterations: 1,
    });

    addAvatarCard.parentElement.appendChild(card);
  } else {
    addAvatarCard.animate(
      [
        { transform: "translateX(0px)" },
        { transform: "translateX(-10px)" },
        { transform: "translateX(10px)" },
        { transform: "translateX(-10px)" },
        { transform: "translateX(10px)" },
        { transform: "translateX(-10px)" },
        { transform: "translateX(10px)" },
        { transform: "translateX(-10px)" },
        { transform: "translateX(10px)" },
        { transform: "translateX(-10px)" },
        { transform: "translateX(10px)" },
        { transform: "translateX(-10px)" },
        { transform: "translateX(10px)" },
        { transform: "translateX(-10px)" },
        { transform: "translateX(10px)" },
        { transform: "translateX(-10px)" },
        { transform: "translateX(10px)" },
        { transform: "translateX(-10px)" },
        { transform: "translateX(10px)" },
        { transform: "translateX(-10px)" },
        { transform: "translateX(10px)" },
        { transform: "translateX(-10px)" },
        { transform: "translateX(10px)" },
        { transform: "translateX(-10px)" },
        { transform: "translateX(10px)" },
        { transform: "translateX(-10px)" },
        { transform: "translateX(10px)" },
        { transform: "translateX(-10px)" },
        { transform: "translateX(10px)" },
        { transform: "translateX(-10px)" },
        { transform: "translateX(10px)" },
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
  }
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

  window.location.href = "https://paninirs.github.io/hci/settings.html";
});

momentsContainer.addEventListener("click", () => {
  momentsContainer.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(0.9)" },
      { transform: "scale(1)" },
    ],
    {
      duration: 70,
      easing: "ease-in-out",
      iterations: 1,
    }
  );

  window.location.href = "https://paninirs.github.io/hci/moments.html";
});

membersContainer.addEventListener("click", (event) => {
  // make it so clicking the addCard doesnt change pages
  if (event.target.id == "addCard") {
    return;
  }
  membersContainer.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(0.9)" },
      { transform: "scale(1)" },
    ],
    {
      duration: 70,
      easing: "ease-in-out",
      iterations: 1,
    }
  );

  window.location.href = "https://paninirs.github.io/hci/members.html";
});
