function showWish() {
  const name = document.getElementById("nameInput").value.trim();
  const wishEl = document.getElementById("wish");

  if (name) {
    wishEl.textContent = `🎉 Chúc mừng sinh nhật ${name}! Chúc bạn thật nhiều niềm vui và hạnh phúc! 🎂`;
    triggerFireworks();
  } else {
    wishEl.textContent = "Vui lòng nhập tên!";
  }
}

function toggleMusic() {
  const music = document.getElementById("birthdaySong");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

// 🎆 Hiệu ứng pháo hoa đơn giản
function triggerFireworks() {
  const canvas = document.getElementById('fireworks');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  for (let i = 0; i < 50; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height / 2;
    const radius = Math.random() * 2 + 1;
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${r},${g},${b},0.8)`;
    ctx.fill();
  }

  setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 1000);
}
