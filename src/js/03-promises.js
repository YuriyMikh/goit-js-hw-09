import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');
formRef.addEventListener('submit', createPromise);

// let delayValue = formRef.elements.delay.value;
// console.log(delayValue);

function handleSubmitValue(event) {
  event.preventDefault();
  return console.log(formRef.elements.delay.value);
}

function createPromise(position, delay) {
  const DELAY = formRef.elements.delay.value;
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        // Fulfill
        resolve({
          position: 5,
          delay: formRef.elements.delay.value,
        });
      } else {
        // Reject
        reject({
          position: formRef.elements.amount.value,
          delay: formRef.elements.delay.value,
        });
      }
    }, DELAY);
  });
}

createPromise()
  .then(result => {
    console.log(formRef.elements.delay.value);
  })
  .catch(error => error);

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
