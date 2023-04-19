const startButtonRef = document.querySelector('button[data-start]');
const stopButtonRef = document.querySelector('button[data-stop]');
const bodyRef = document.querySelector('body');

let timerId = null;

stopButtonRef.disabled = true;

startButtonRef.addEventListener('click', event => {
  startButtonRef.disabled = true;
  stopButtonRef.disabled = false;
  bodyRef.style.backgroundColor = getRandomHexColor();

  timerId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);
  console.log(timerId);
});

stopButtonRef.addEventListener('click', event => {
  startButtonRef.disabled = false;
  stopButtonRef.disabled = true;
  clearInterval(timerId);
  console.log(timerId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
