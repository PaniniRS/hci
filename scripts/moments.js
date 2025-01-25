const cards = document.querySelectorAll(".card");
const iphone = document.querySelector(".iphone-screen");
const blurElement = document.querySelector(".blur");
const container = document.querySelector(".container");
const CARDWIDTH = 160;
const CARDHEIGHT = 300;
const IMGWIDTH = 160;
const IMGHEIGHT = 270;
const ZOOMFACTOR = 1.5;
const TEXTSIZE = 16;
const CARDMAX = randomInt(30) + 1;
let blurToggle = false;

const dates = ["23/02/23"];
const images = ["./assets/moments.png"];

//////////////

for (let i = 0; i < CARDMAX; i++) {
  const card = document.createElement("div");
  const day = randomInt(30) + 1;
  const month = randomInt(11) + 1;
  const year = randomInt(24);
  card.classList.add("card");
  card.id = `momentsCard`;
  card.innerHTML = `<img src="${images[0]}" alt="moments" />
          <h4>${day < 10 ? "0" + day : day}/${
    month < 10 ? "0" + month : month
  }/${year < 10 ? "0" + year : year}</h4>`;

  container.appendChild(card);
}

/////
/////

function randomInt(max) {
  return Math.floor(Math.random() * max);
}

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
