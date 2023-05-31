import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');
formRef.addEventListener('submit', handlerSubmitForm);

function handlerSubmitForm(event) {
  event.preventDefault();
  //переменные для сохранения значений инпутов. Сразу переводим в число используя "+"
  let inputDelay = +formRef.elements.delay.value;
  let inputStep = +formRef.elements.step.value;
  let inputAmount = +formRef.elements.amount.value;
  
//перебираем циклом, чтобы вызывать промисы необходимое количество раз 
  for (let i = 1; i <= inputAmount; i += 1) {
    createPromise(i, inputDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    inputDelay += inputStep; //на каждой итерации добавляем к задержке шаг задержки
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}
