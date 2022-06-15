// открытие календаря
let calendar = document.querySelector('.calendar');
let buttonDropdown = document.querySelectorAll('.button-dropdown--calendar');
let btnSumCalendar = calendar.querySelector('.button-activity__apply--calendar');
let btnResetCalendar = calendar.querySelector('.button-activity__cleanup--calendar');

export const showCalendar = () => {
  buttonDropdown.forEach((value) => {
    value.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      calendar.classList.toggle('hidden');
    });
  });
}



let now = new Date();
let currentMonth = now.getMonth();
let currentYear = now.getFullYear();

const dateNumberElements = document.querySelectorAll('.calendar__date-number');
const previousButton = document.querySelector('.calendar__previous');
const nextButton = document.querySelector('.calendar__next');
const monthElement = document.querySelector('.calendar__month');

const monthIndexToName = {
  0: "Январь",
  1: "Февраль",
  2: "Март",
  3: "Апрель",
  4: "Май",
  5: "Июнь",
  6: "Июль",
  7: "Август",
  8: "Сентябрь",
  9: "Октябрь",
  10: "Ноябрь",
  11: "Декабрь"
};

let dateIn = document.getElementById('date-in');
let dateOut = document.getElementById('date-out');
let dateArrival = document.querySelector('input[name=arrival-date]');

export const createCalendar = function(type = 0) {
  // рендер календаря
  const renderMonth = (monthIndex, year) => {
    const numDaysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    const firstDate = new Date(year, monthIndex);

    let firstDay = firstDate.getDay();
    if (firstDay === 0) {
      firstDay = 7;
    }
    monthElement.innerText = `${monthIndexToName[monthIndex]} ${year}`;
    dateNumberElements.forEach((el, i) => {
      const dateNumber = (i + 1) - firstDay;

      el.innerText = dateNumber > -1 && dateNumber < numDaysInMonth ? dateNumber + 1 : '';
      
      //отмечается текущая дата
      const today = new Date();
      // console.log(today)
      if (today.getMonth() === monthIndex && today.getFullYear() === year && today.getDate() === (i + 1) - (firstDay - 1)) {
        el.classList.add('calendar__date-number--today');
      } else {
        el.classList.remove('calendar__date-number--today');
      }
    });
  };

  const createNameMonth = () => {
    if (currentMonth === 2 || currentMonth === 7) {
      monthIndexToName[currentMonth] = monthIndexToName[currentMonth] + 'а'
    } else {
      monthIndexToName[currentMonth] = monthIndexToName[currentMonth].slice(0, -1) + 'я';
    }
  }

  const cleanCurrentDate = () => {
    dateNumberElements.forEach(el => {
      el.classList.remove('calendar__date-number--current');
      el.classList.remove('calendar__date-number--in-range');
    });
  }

  previousButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentMonth === 0) {
      currentMonth = 11;
      currentYear--;

    } else {
      currentMonth--;
    }

    renderMonth(currentMonth, currentYear);
    createNameMonth();
    cleanCurrentDate();
  });

  nextButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentMonth === 11) {
      currentMonth = 0;
      currentYear++;
    } else {
      currentMonth++;
    }
    renderMonth(currentMonth, currentYear);
    createNameMonth();
    cleanCurrentDate();
  });

  renderMonth(currentMonth, currentYear);


  // выбор дат

  function hideClassCurrent() {
    dateNumberElements.forEach(el => {
      el.classList.remove('calendar__date-number--current');
    })
  }

  function hideClassInRange() {
    dateNumberElements.forEach(el => {
      el.classList.remove('calendar__date-number--in-range');
    })
  }

  let m = Array.from(dateNumberElements); //массив
  
  dateNumberElements.forEach(el => {

    el.addEventListener('click', function () {
      let current;
      createNameMonth();
      if (document.querySelectorAll('.calendar__date-number--current').length > 1) {
        hideClassCurrent();
        hideClassInRange();
      }
      
      el.classList.add('calendar__date-number--current');
      
      current = document.querySelectorAll('.calendar__date-number--current');

      //записываем значение первой выбранной даты в форму
      
      function dayValue(cur) {
        return current[cur].textContent.length < 2
         ? '0' + current[cur].textContent
         : current[cur].textContent;
       }
 
       let monthValue =
           (currentMonth + 1).toString().length < 2
           ? '0' + (currentMonth + 1).toString()
          : (currentMonth + 1).toString();
      
      
      
       
      if (type === 0) {
        dateIn.value = `${dayValue(0)}.${monthValue}.${currentYear}`;
      } else {
        dateArrival.value = `${dayValue(0)} ${monthIndexToName[currentMonth].toLowerCase()}`;
      }
      
      if (current.length > 1) {
        let p = m.indexOf(current[0]);
        let t = m.indexOf(current[1]);

        // добавляем цвет для промежуточных дат
        for (p = m.indexOf(current[0]); p < t - 1; p++) {
          dateNumberElements[p + 1].classList.add('calendar__date-number--in-range');
        }

        //добавляем начальной и конечной датам соответствующие классы для оформления

        current[0].classList.add('calendar__date-number--start');
        current[1].classList.add('calendar__date-number--end');

        if (type === 0) {
          dateOut.value = `${dayValue(1)}.${monthValue}.${currentYear}`;
        } else {
          dateArrival.value = dateArrival.value + ' - ' + dayValue(1) + ' ' + monthIndexToName[currentMonth].toLowerCase()
        } 
      }
    });
  });

  btnSumCalendar.addEventListener('click', () => {
    calendar.classList.add('hidden');
    
  });

  btnResetCalendar.addEventListener('click', () => {
    if (type === 0) {
      dateIn.value = '';
      dateOut.value = '';
    } else {
      dateArrival.value = ''
    }
    
    cleanCurrentDate();
    
  });
  
}

export const closeCalendar = function () {
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && !calendar.classList.contains('hidden')) {
      calendar.classList.add('hidden');
    }
  });

  document.addEventListener('click', (e) => {
    let its_calendar = e.target == calendar || calendar.contains(e.target);
    
    if (!its_calendar &&
      e.target !== buttonDropdown[0] &&
      e.target !== buttonDropdown[1] &&
      !calendar.classList.contains('hidden')) {
      calendar.classList.add('hidden');
    }
  });
}