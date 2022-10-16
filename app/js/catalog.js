
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

import { catalog } from './modules/apt-catalog.js';

let aptCatalog = document.querySelector('.catalog');

setCatalog(catalog);

function setCatalog(data) {
  aptCatalog.insertAdjacentHTML('afterbegin', `
  <div class="catalog__wrapper">${setAptCards(data)}</div>
`)
}

function setAptCards(data) {
  return data.map((card) => `
  <div class="apt-card">
  <div class="apt-card__slider">
    <img class="apt-card__img" src=${card.img_link} alt=${card.img_alt}>
    <div class="slider-toggle apt-card__toggle">
      <ul class="slider-toggle__list list-reset">
        <li class="slider-toggle__item">
        <a class="slider-toggle__link slider-toggle__link--current" href="#">
          <span class="visually-hidden">Текущая фотография номера</span>
        </a>
        </li>
        <li class="slider-toggle__item">
        <a class="slider-toggle__link" href="#"><span class="visually-hidden">Вторая фотография номера</span></a>
        </li>
        <li class="slider-toggle__item">
        <a class="slider-toggle__link" href="#"><span class="visually-hidden">Третья фотография номера</span></a>
        </li>
        <li class="slider-toggle__item">
        <a class="slider-toggle__link" href="#"><span class="visually-hidden">Последняя фотография номера</span></a>
        </li>
      </ul>
    </div>
  </div>
  <div class="apt-card__wrapper">
    <div class="apt-card__info">
      <p class="apt-card__number">
        <a class="apt-card__link apt-card__link--info" href="apartment-details.html">${card.number_apt}</a>
        <span class="apt-card__lux">${card.lux}</span>
      </p>
      <p class="apt-card__price">
        <span>${card.price} ₽</span>
        в сутки
      </p>
    </div>
    <div class="apt-card__reviews">
      <p class="apt-card__rating">
        ${setStars(card.stars)}
      </p>
      <p class="apt-card__ammount-reviews">
        <a class="apt-card__link apt-card__link--reviews" href="">
          <span>${card.reviews}</span>
          Отзывов
        </a>
      </p>
    </div>
  </div>
</div>
  `).join(' ')
}

function setStars(stars) {
  return stars.map((star) => `<span class="material-icons apt-card__star">${star}</span>`).join(' ')
}




