let setIntervalID = null;
const COLOR_CHANGE_DELAY = 1000;

const refs = {
  startButton: document.querySelector('[data-start]'),
  stopButton: document.querySelector('[data-stop]'),
};

refs.startButton.addEventListener('click', onStartButtonClick);
refs.stopButton.addEventListener('click', onStopButtonClick);

function onStartButtonClick(event) {
  setIntervalID = setInterval(bodyChangeColor, COLOR_CHANGE_DELAY);

  event.currentTarget.disabled = true;
  refs.stopButton.disabled = false;
}

function onStopButtonClick(event) {
  clearInterval(setIntervalID);

  event.currentTarget.disabled = true;
  refs.startButton.disabled = false;
}

function bodyChangeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
