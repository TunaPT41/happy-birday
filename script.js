const colors = ["#ff4081", "#ffd740", "#64ffda", "#69f0ae"];
function createBubble() {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubble.style.left = Math.random() * 100 + "vw";
  bubble.style.animationDuration = 3 + Math.random() * 2 + "s";
  bubble.style.background = colors[Math.floor(Math.random() * colors.length)];
  document.body.appendChild(bubble);
  setTimeout(() => bubble.remove(), 5000);
}
setInterval(createBubble, 500);
