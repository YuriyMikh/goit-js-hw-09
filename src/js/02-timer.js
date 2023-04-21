import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startButtonRef = document.querySelector('button[data-start]');
const inputRef = document.querySelector('#datetime-picker');

flatpickr(inputRef, {  });

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const date1 = Date.now;
    console.log(date1);
  },
};

startButtonRef.disabled = true;

flatpickr(inputRef, { options });


// if (3 > 2) {
//   alert();
// }

// Notiflix.Notify.failure('Please choose a date in the future');
// Notiflix.Report.failure('Охохо :-|', 'Надо бы выбрать дату в будущем, иначе ничё не получится', 'Я понял');
// Notiflix.Report.success('Title', 'Message', 'Button Text');

// console.log( options.onClose(selectedDates));

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
