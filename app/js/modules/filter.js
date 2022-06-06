let btnOpenFilter = document.querySelector('.catalog-content__button');
let btnCloseFilter = document.querySelector('.filter__button--close');
let filter = document.querySelector('.filter');
let catalog = document.querySelector('.catalog');

export const showFilter = function () {
  btnOpenFilter.addEventListener('click', () => {
    filter.classList.remove('hidden');
    catalog.classList.add('hidden');
    btnOpenFilter.classList.add('hidden');
  })
};

export const closeFilter = function () {
  btnCloseFilter.addEventListener('click', () => {
    filter.classList.add('hidden');
    catalog.classList.remove('hidden');
    btnOpenFilter.classList.remove('hidden');
  })
}