const h1 = document.querySelector('h1');

function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  h1.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);
updateTime();
document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    document.body.requestFullscreen();
  }
});
