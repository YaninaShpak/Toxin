//проверка поддержки webp
import { isWebp } from './modules/function-webp.js';
isWebp();

// открытие/закрытие меню-бургера

import { showMobileMenu } from './modules/menu-burger.js';
showMobileMenu();

// открытие и работа счетчика гостей
let guestsBlock = document.querySelector('.guests');
let counterGuests = guestsBlock.querySelector('.counter');
let buttonDropdownCounterGuests = guestsBlock.querySelector('.button-dropdown--counter');
let numContainerGuests = guestsBlock.querySelectorAll('.num');
let btnIncGuests = guestsBlock.querySelectorAll('.inc');
let btnDecGuests = guestsBlock.querySelectorAll('.dec');
let btnSumCounterGuests = guestsBlock.querySelector('.button-activity__apply');
let btnResetCounterGuests = guestsBlock.querySelector('.button-activity__cleanup');
let inputAmountGuests = document.getElementById('guests');
let counterTitleGuests = guestsBlock.querySelectorAll('.counter__column--title');

import { showCounter, counted, setTextInput } from './modules/counter.js';
showCounter(buttonDropdownCounterGuests, counterGuests);

counted(numContainerGuests, btnIncGuests, btnDecGuests, btnSumCounterGuests, btnResetCounterGuests, inputAmountGuests, 0, counterTitleGuests);
setTextInput();