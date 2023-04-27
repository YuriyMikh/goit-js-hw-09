import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startButtonRef = document.querySelector('button[data-start]');
const inputRef = document.querySelector('#datetime-picker');
const daysRef = document.querySelector('span[data-days]');
const hoursRef = document.querySelector('span[data-hours]');
const minutesRef = document.querySelector('span[data-minutes]');
const secondsRef = document.querySelector('span[data-seconds]');

let intervalId = null;
let selectedDate = null;
let currentDate = null;

startButtonRef.disabled = true; //делаем неактивной кнопку Start

startButtonRef.addEventListener('click', onStartCounter);

//переменная с настройками для будущего вызова flatpickr()
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    //если выбранное время в прошлом (меньше чем Date.now()), то выводим ошибку
    if (selectedDates[0].getTime() < Date.now()) {
      Notiflix.Report.failure(
        'Error',
        'Please choose a date in the future',
        'OK'
      );
    }
    //а если время в будущем = выводим успех
    else {
      selectedDate = selectedDates[0].getTime();
      startButtonRef.disabled = false;
      Notiflix.Report.success('Great', 'Now press the "Start" button', 'ОК');
    }
  },
};

flatpickr(inputRef, options);

function onStartCounter() {
  counter.start();
}

//функция для конвертации милисекунд в дни/часы/минуты/секунды
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  return { days, hours, minutes, seconds };
}

const counter = {
  start() {
    intervalId = setInterval(() => {
      currentDate = Date.now();
      console.log(selectedDate);
      const deltaTime = selectedDate - currentDate;
      updateTimerFace(convertMs(deltaTime));
      startButtonRef.disabled = true;
      inputRef.disabled = true;

      //обрабатываем окончание работы секундомера:
      if (deltaTime <= 1000) {
        clearInterval(intervalId);
        startButtonRef.disabled = true;
        inputRef.disabled = false;
      }
    }, 1000);
  },
};

//функция для обновления интерфейса
function updateTimerFace({ days, hours, minutes, seconds }) {
  daysRef.textContent = `${days}`;
  hoursRef.textContent = `${hours}`;
  minutesRef.textContent = `${minutes}`;
  secondsRef.textContent = `${seconds}`;
}

//функция добавления нуля перед значением (для корректного отображения часов/минут/секунд)
function addLeadingZero(value) {
  return value.toString().padStart(2, 0);
}
