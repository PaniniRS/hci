const menuButton = document.querySelector(".menu");
const screenshotButton = document.querySelector(".screenshot");
const exitButton = document.querySelector(".exit");
const menuList = document.querySelector(".menu-list");
const menuButtonPoke = document.querySelector("#pokeSettings");
const menuButtonMoments = document.querySelector("#momentsSettings");
const menuButtonSettings = document.querySelector("#menuSettings");

// disable selection on document
document.addEventListener("selectstart", (e) => e.preventDefault());

let isMenuOpen = false;

menuButton.addEventListener("click", (e) => {
  clickButton(menuButton);
  toggleMenu();
});

exitButton.addEventListener("click", (e) => {
  // TODO: Actually make this beautiful
  clickButton(exitButton);

  const confirmationModal = document.createElement("div");
  confirmationModal.classList.add("confirmation-modal");
  confirmationModal.style.position = "fixed";
  confirmationModal.style.width = "240px";
  confirmationModal.style.top = "50%";
  confirmationModal.style.left = "50%";
  confirmationModal.style.transform = "translate(-50%, -50%)";
  confirmationModal.style.backgroundColor = "#D9D9D9a3";
  confirmationModal.style.padding = "8px";
  confirmationModal.style.borderRadius = "16px";
  confirmationModal.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
  confirmationModal.style.zIndex = "10000";

  const confirmationText = document.createElement("p");
  confirmationText.textContent = "Are you sure you want to leave the call?";
  confirmationModal.appendChild(confirmationText);

  const confirmButton = document.createElement("button");
  confirmButton.textContent = "Yes";
  confirmButton.style.marginRight = "1rem";
  confirmButton.addEventListener("click", () => {
    window.location.href = "../landing.html";
  });
  confirmationModal.appendChild(confirmButton);

  const cancelButton = document.createElement("button");
  cancelButton.textContent = "No";
  cancelButton.addEventListener("click", () => {
    confirmationModal.remove();
  });
  confirmationModal.appendChild(cancelButton);

  document.body.appendChild(confirmationModal);

  // window.location.href = "../landing.html";
});

screenshotButton.addEventListener("click", (e) => {
  clickButton(screenshotButton);
  screenshotAnimation();
  screenshot();
});

menuButtonPoke.addEventListener("click", (e) => {
  clickButton(menuButtonPoke);
  // create a sliding notification that says you pokes someone
  const pokeNotification = document.createElement("div");
  pokeNotification.classList.add("poke-notification");
  // style it
  pokeNotification.style.position = "fixed";
  pokeNotification.style.top = "50%";
  pokeNotification.style.left = "50%";
  pokeNotification.style.transform = "translate(-50%, -50%)";
  pokeNotification.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  pokeNotification.style.color = "white";
  pokeNotification.style.padding = "1rem";
  pokeNotification.style.borderRadius = "1rem";
  pokeNotification.style.zIndex = "9999";

  pokeNotification.textContent = "You poked the family!";
  document.body.appendChild(pokeNotification);
  toggleMenu();
  setTimeout(() => {
    pokeNotification.remove();
  }, 3000);
});

menuButtonMoments.addEventListener("click", (e) => {
  clickButton(menuButtonMoments);
  window.location.href = "../moments.html";
});

menuButtonSettings.addEventListener("click", (e) => {
  clickButton(menuButtonSettings);
  window.location.href = "../settings.html";
});

//////////////////
const screenshotAnimation = () => {
  // Create the flash element
  const flash = document.createElement("div");
  flash.style.position = "fixed";
  flash.style.top = "0";
  flash.style.left = "0";
  flash.style.width = "100vw";
  flash.style.height = "100vh";
  flash.style.backgroundColor = "white";
  flash.style.opacity = "0"; // Start invisible
  flash.style.transition = "opacity 0.1s ease-in, visibility 0s 0.3s"; // Fade-in and fade-out effect
  flash.style.zIndex = "9999";

  // Append flash to the body
  document.body.appendChild(flash);

  // Trigger the flash animation
  requestAnimationFrame(() => {
    flash.style.opacity = "1"; // Flash appears
  });

  // Remove flash after animation
  setTimeout(() => {
    flash.style.opacity = "0"; // Flash fades out
    setTimeout(() => {
      flash.remove(); // Cleanup DOM
    }, 300); // Match transition delay
  }, 100); // Keep flash visible momentarily
};

//////////////////////

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

const captureArea = document.querySelector(".iphone-screen");
function screenshot() {
  html2canvas(captureArea)
    .then((canvas) => {
      // Create a link element
      const link = document.createElement("a");
      const date = new Date();
      const formattedDate = `${String(date.getDate()).padStart(
        2,
        "0"
      )}/${String(date.getMonth() + 1).padStart(2, "0")}/${String(
        date.getFullYear()
      ).slice(-2)}-${String(date.getHours()).padStart(2, "0")}:${String(
        date.getMinutes()
      ).padStart(2, "0")}`;
      link.download = `OnlyFam_Moment${formattedDate}.png`; // Filename for the screenshot
      link.href = canvas.toDataURL("image/png"); // Set image data as href
      link.click(); // Trigger download
    })
    .catch((error) => {
      console.error("Screenshot failed:", error);
    });
}

const toggleMenu = () => {
  menuList.classList.toggle("slide-in");
  menuList.classList.toggle("slide-out");
  if (isMenuOpen) {
    setTimeout(() => {
      menuList.classList.toggle("hidden");
    }, 800);
    isMenuOpen = false;
  } else {
    menuList.classList.toggle("hidden");
    isMenuOpen = true;
  }
};
