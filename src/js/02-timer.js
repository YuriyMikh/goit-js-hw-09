import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startButtonRef = document.querySelector('button[data-start]');
const inputRef = document.querySelector('#datetime-picker');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

startButtonRef.disabled = true;

flatpickr(inputRef, {});
// if (3 > 2) {
//   alert('"Please choose a date in the future"');
// }
