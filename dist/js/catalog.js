
//календарь
import { showCalendar, createCalendar, closeCalendar } from './modules/calendar.js';

showCalendar();
createCalendar(1);
closeCalendar();

import { showCounter, counted } from './modules/counter.js';
let comfortBlock = document.querySelector('.filter-comfort');
let counterComfort = comfortBlock.querySelector('.counter');
let buttonDropdownCounterComfort = comfortBlock.querySelector('.button-dropdown--counter');
let numContainerComfort = comfortBlock.querySelectorAll('.num');
let btnIncComfort = comfortBlock.querySelectorAll('.inc');
let btnDecComfort = comfortBlock.querySelectorAll('.dec');
let btnSumCounterComfort = comfortBlock.querySelector('.button-activity__apply');
let btnResetCounterComfort = comfortBlock.querySelector('.button-activity__cleanup');
let inputAmountComfort = document.getElementById('comfort');
let counterTitleComfort = comfortBlock.querySelectorAll('.counter__column--title');

showCounter(buttonDropdownCounterComfort, counterComfort);
counted(numContainerComfort, btnIncComfort, btnDecComfort, btnSumCounterComfort, btnResetCounterComfort, inputAmountComfort, 1, counterTitleComfort);

// открыть/закрыть фильтр
import { showFilter, closeFilter } from './modules/filter.js';
showFilter();
closeFilter();




