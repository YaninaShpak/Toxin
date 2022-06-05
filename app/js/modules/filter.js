let btnOpenFilter = document.querySelector('.catalog-content__button');
let btnCloseFilter = document.querySelector('.filter__button--close');
let filter = document.querySelector('.filter');

export const showFilter = function () {
  btnOpenFilter.addEventListener('click', () => {
    filter.classList.remove('hidden');
    btnOpenFilter.classList.add('hidden');
  })
};

export const closeFilter = function () {
  btnCloseFilter.addEventListener('click', () => {
    filter.classList.add('hidden');
    btnOpenFilter.classList.remove('hidden');
  })
}