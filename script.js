const hanjiBtn = document.getElementById("hanjiBtn");
const nahiBtn = document.getElementById("nahiBtn");

hanjiBtn.addEventListener("click", () => {
  confetti({
    particleCount: 200,
    spread: 90,
    origin: { y: 0.6 },
  });

  setTimeout(() => {
    window.location.href = "letter.html";
  }, 1200);
});

nahiBtn.addEventListener("mouseenter", () => {
  nahiBtn.style.position = "absolute";
  nahiBtn.style.left = Math.random() * 80 + "vw";
  nahiBtn.style.top = Math.random() * 80 + "vh";
});

const countdown = document.getElementById("countdown");
const valentineDate = new Date("Feb 14, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = valentineDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  countdown.innerHTML = `Valentine in ${days} days ${hours} hrs ❤`;
}, 1000);
