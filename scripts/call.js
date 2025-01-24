const menuButton = document.querySelector(".menu");
const screenshotButton = document.querySelector(".screenshot");
const exitButton = document.querySelector(".exit");
const menuList = document.querySelector(".menu-list");
const menuButtonPoke = document.querySelector("#pokeSettings");
const menuButtonMoments = document.querySelector("#momentsSettings");
const menuButtonSettings = document.querySelector("#menuSettings");

// disable selection on document
document.addEventListener("selectstart", (e) => e.preventDefault());

const buttons = document.querySelectorAll(".button");
let isMenuOpen = false;

menuButton.addEventListener("click", (e) => {
  clickButton(menuButton);
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
});

exitButton.addEventListener("click", (e) => {
  clickButton(exitButton);
  window.location.href = "../index.html";
});

screenshotButton.addEventListener("click", (e) => {
  clickButton(screenshotButton);
  screenshotAnimation();
  screenshot();
});

menuButtonPoke.addEventListener("click", (e) => {
  clickButton(menuButtonPoke);
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
