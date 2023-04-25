import Notiflix from 'notiflix';

console.log(5);

const formRef = document.querySelector('.form');
formRef.addEventListener('submit', createPromise);

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//     position('ja');
//   } else {
//     // Reject
//     delay('nein');
//   }
// }

createPromise()
  .then(result => console.log(result))
  .catch(error => console.log(error));

  