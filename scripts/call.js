const menuButton = document.querySelector(".menu");
const screenshotButton = document.querySelector(".screenshot");
const exitButton = document.querySelector(".exit");
const menuList = document.querySelector(".menu-list");

const buttons = document.querySelectorAll(".button");

menuButton.addEventListener("click", (e) => {
  clickButton(menuButton);
  menuList.classList.toggle("hidden");
});

exitButton.addEventListener("click", (e) => {
  clickButton(exitButton);
});

screenshotButton.addEventListener("click", (e) => {
  clickButton(screenshotButton);
  screenshotAnimation();
  captureVisiblePage();
});

const clickButton = (button) => {
  button.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.1)" },
      { transform: "scale(1)" },
    ],
    {
      duration: 300,
      iterations: 1,
    }
  );
};

const screenshotAnimation = () => {
  // add a white flash
  const flash = document.createElement("div");
  flash.style.position = "fixed";
  flash.style.top = "0";
  flash.style.left = "0";
  flash.style.width = "100vw";
  flash.style.height = "100vh";
  flash.style.backgroundColor = "white";
  flash.style.zIndex = "9999";

  document.body.appendChild(flash);
  setTimeout(() => {
    flash.remove();
  }, 200);
};

//////////////////////

// TODO: FIX THIS
function captureVisiblePage() {
  // Create a canvas element to capture the visible part
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const iphoneScreen = document.querySelector(".iphone-screen");
  // Get dimensions of the visible area
  const width = iphoneScreen.width;
  const height = iphoneScreen.height;

  // Set canvas size to match visible area
  canvas.width = width;
  canvas.height = height;

  // Draw the visible page
  // context.drawImage(document.body, 0, 0, width, height);
  // Convert the canvas to a PNG image
  canvas.toBlob((blob) => {
    if (blob) {
      const date = new Date();
      const dateParsed = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}-${date.getHours()}:${date.getMinutes()}`;
      saveImageToLocalStorage(blob, `OnlyFamMoment-${dateParsed}.png`);

      // Now download the blob
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `OnlyFamMoment-${dateParsed}.png`;
      a.click();
      URL.revokeObjectURL(url);
      a.remove();
    } else {
      console.error("Failed to create the image blob.");
    }
  });
}

function saveImageToLocalStorage(blob, fileName) {
  const reader = new FileReader();
  reader.onload = function (event) {
    // Save image in localStorage as base64
    localStorage.setItem(fileName, event.target.result);
    console.log(`Image saved in localStorage with key: ${fileName}`);
  };
  reader.readAsDataURL(blob);
}
