const h1 = document.querySelector('h1');

function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  h1.textContent = `${hours}:${minutes}`;
}

setInterval(updateTime, 1000);
updateTime();
document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    document.body.requestFullscreen();
  }
});

const h4 = document.querySelector('h4');
let startTime = null;
let intervalId = null;

function updateStopwatch() {
  if (startTime === null) {
    return;
  }
  const now = new Date();
  const elapsed = now - startTime;
  const hours = Math.floor(elapsed / 3600000);
  const minutes = Math.floor((elapsed % 3600000) / 60000);
  const seconds = Math.floor((elapsed % 60000) / 1000);
  const milliseconds = elapsed % 1000;
  h4.innerHTML = `${hours > 0 ? hours + ':' : ''}${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    document.body.requestFullscreen();
  } else if (event.key === 's') {
    if (intervalId === null) {
      startTime = new Date();
      intervalId = setInterval(updateStopwatch, 10);
      h4.style.opacity = 1;
    } else {
      clearInterval(intervalId);
      intervalId = null;
      startTime = null;
      h4.style.opacity = 0;
    }
  }
});
