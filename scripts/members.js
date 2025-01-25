const container = document.querySelector(".container");
const memberCount = getRandomInt(20);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const names = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Hank",
  "Ivy",
  "Jack",
  "Kathy",
  "Leo",
  "Mona",
  "Nina",
  "Oscar",
  "Paul",
  "Quincy",
  "Rachel",
  "Steve",
  "Tina",
];
const avatars = [
  "../assets/avatars/avatar1.jpeg",
  "../assets/avatars/avatar2.jpg",
  "../assets/avatars/avatar3.jpg",
  "../assets/avatars/avatar4.jpeg",
  "../assets/avatars/avatar5.jpg",
  "../assets/avatars/avatar6.jpg",
];

console.log("memberCount", memberCount);

for (let i = 0; i < memberCount; i++) {
  const member = document.createElement("div");
  member.classList.add("memberCard");
  member.innerHTML = `
          <span>${names[getRandomInt(names.length)]}</span>
          <img src="${avatars[getRandomInt(avatars.length)]}" alt="avatar" />
        `;
  container.appendChild(member);
}
