'use strict';

const header = document.querySelector(`.page-header`);
const helpToggleBtn = header.querySelector(`.page-header__help-btn`);
const helpDropdownElement = header.querySelector(`.page-header__info`);
const menuToggleBtn = header.querySelector(`.main-nav__menu-btn`);
const menuDropdownElement = header.querySelector(`.main-nav__menu`);


const sideClickHandler = (evt) => {
  evt.preventDefault();
  if (!evt.target.closest(`.page-header__help`)) {
    helpDropdownElement.classList.add(`hidden`);
  }
};


const setHelpDropdownHandler = () => {
  helpToggleBtn.addEventListener(`click`, (evt) => {
    evt.preventDefault();

    if (helpDropdownElement.classList.contains(`hidden`)) {
      helpDropdownElement.classList.remove(`hidden`);
      document.addEventListener(`click`, sideClickHandler);
    } else {
      document.removeEventListener(`click`, sideClickHandler);
      helpDropdownElement.classList.add(`hidden`);
    }
  });
};


const setMenuDropdownHandler = () => {
  menuToggleBtn.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    menuDropdownElement.classList.toggle(`hidden`);
    menuToggleBtn.classList.toggle(`main-nav__menu-btn--open`);
    menuToggleBtn.classList.toggle(`main-nav__menu-btn--close`);
  });
};


if (helpToggleBtn && helpDropdownElement) {
  helpDropdownElement.classList.add(`hidden`);
  setHelpDropdownHandler();
}
if (menuToggleBtn && menuDropdownElement) {
  menuDropdownElement.classList.add(`hidden`);
  setMenuDropdownHandler();
}
