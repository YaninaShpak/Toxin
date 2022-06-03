// счетчик количество гостей
export const showCounter = (btnCount, counter) => {
  btnCount.addEventListener('click', (e) => {
    e.preventDefault();
    counter.classList.toggle('hidden');
  }) 
}

const counted = function (numContainer, btnInc, btnDec, btnSumCounter, btnResetCounter, inputAmount, type = 0, counterTitle) {

  btnInc.forEach(function (item, index) {
    
    item.addEventListener('click', (e) => {
      
      e.preventDefault();
      let sum = 0;
      
      if (+numContainer[index].value < 99) {
        numContainer[index].value = (Number(numContainer[index].value) + 1);
      }
      
      numContainer.forEach(i => {
        sum = sum + Number(i.value);
      });

      if (sum > 0) {
        btnResetCounter.style.display = 'block';
      } 
    });
  });
  
  btnDec.forEach(function (item, index) {
    

    item.addEventListener('click', (e) => {
      let sum = 0;
      e.preventDefault();
      if (+numContainer[index].value > 0) {
        numContainer[index].value = (+numContainer[index].value - 1);
      }
      numContainer.forEach(i => {
        sum = sum + Number(i.value);
      });

      if (sum === 0) {
        btnResetCounter.style.display = 'none';
      }
    });
  });

  btnSumCounter.addEventListener('click', () => {
    let sum = 0;
    numContainer.forEach((item) => {
      sum = sum + Number(item.value);
    });

    if (type === 0) {
      let sumNewborn;
      sumNewborn = Number(numContainer[numContainer.length - 1].value);
      sum = sum - sumNewborn;

      setTextInput(sum, sumNewborn, inputAmount);
    } else {

      inputAmount.value = `${numContainer[0].value} ${counterTitle[0].textContent}, ${numContainer[1].value} ${counterTitle[1].textContent}, ${numContainer[2].value} ${counterTitle[2].textContent}`;
      
    }
  });

  btnResetCounter.addEventListener('click', (e) => {
    
    inputAmount.value = '';
    numContainer.forEach(item => {
      item.value = 0;
    });

    btnResetCounter.style.display = 'none';
    
  }); 
}

function setTextInput(sum, sumNewborn, inputAmount) {
  if (sum > 0) {
    if (sum === 1 ||
      (sum > 20 && String(sum).charAt(String(sum).length - 1) === '1')
    ) {
      inputAmount.value = `${sum} гость`;
    } else if (
      (sum > 1 && sum < 5) ||
      (sum > 20 &&
        (
          String(sum).charAt(String(sum).length - 1) === '2' ||
          String(sum).charAt(String(sum).length - 1) === '3' ||
        String(sum).charAt(String(sum).length - 1) === '4'
      ))) {
      inputAmount.value = `${sum} гостя`;
    } else {
      inputAmount.value = `${sum} гостей`;
    }
  }

  if (sumNewborn > 0) {
    if (sumNewborn === 1 ||
      (sumNewborn > 20 && String(sumNewborn).charAt(String(sumNewborn).length - 1) === '1')
    ) {
      inputAmount.value = `${inputAmount.value}, ${sumNewborn} младенец`;
    } else if (
      (sumNewborn > 1 && sumNewborn < 5) ||
      (sumNewborn > 20 &&
        (
          String(sumNewborn).charAt(String(sumNewborn).length - 1) === '2' ||
          String(sumNewborn).charAt(String(sumNewborn).length - 1) === '3' ||
        String(sumNewborn).charAt(String(sumNewborn).length - 1) === '4'
      ))) {
        inputAmount.value = `${inputAmount.value}, ${sumNewborn} младенца`;
    } else {
      inputAmount.value = `${inputAmount.value}, ${sumNewborn} младенцев`;
    }
  }
}

export { counted, setTextInput };

