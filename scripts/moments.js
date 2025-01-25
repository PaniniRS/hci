const cards = document.querySelectorAll(".card");
const iphone = document.querySelector(".iphone-screen");
const blurElement = document.querySelector(".blur");
const CARDWIDTH = 160;
const CARDHEIGHT = 300;
const IMGWIDTH = 160;
const IMGHEIGHT = 270;
const ZOOMFACTOR = 1.5;
const TEXTSIZE = 16;
let blurToggle = false;

focusOnClick = (card) => {
  card.classList.add("card-focus");
  card.style.width = `${CARDWIDTH * ZOOMFACTOR}px`;
  card.style.height = `${CARDHEIGHT * ZOOMFACTOR}px`;

  const img = card.querySelector("img");
  const textLabel = card.querySelector("h4");
  img.style.width = `${IMGWIDTH * ZOOMFACTOR}px`;
  img.style.height = `${IMGHEIGHT * ZOOMFACTOR}px`;
  textLabel.style.fontSize = `${TEXTSIZE * ZOOMFACTOR}px`;

  blurToggle = true;
  blurElement.classList.toggle("hidden");
};

defocusOnClick = (card) => {
  card.classList.remove("card-focus");
  card.style.width = `${CARDWIDTH}px`;
  card.style.height = `${CARDHEIGHT}px`;

  const img = card.querySelector("img");
  const textLabel = card.querySelector("h4");
  img.style.width = `${IMGWIDTH}px`;
  img.style.height = `${IMGHEIGHT}px`;
  textLabel.style.fontSize = `${TEXTSIZE}px`;

  blurToggle = false;
  blurElement.classList.toggle("hidden");
};

blurElement.addEventListener("click", () => {
  const focusedCard = document.querySelector(".card-focus");
  defocusOnClick(focusedCard);
});

cards.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (!blurToggle) {
      focusOnClick(element);
    }
  });
});
