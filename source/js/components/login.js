'use strict';

const page = document.querySelector(`.page__body`);
const loginOpenBtn = document.querySelector(`#login-btn`);
const loginModal = document.querySelector(`.login-modal`);
const loginField = loginModal.querySelector(`.login-modal__input`);
const loginCloseBtn = loginModal.querySelector(`.login-modal__close-btn`);

if (loginOpenBtn && loginModal) {
  loginOpenBtn.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    loginModal.classList.remove(`hidden`);
    page.classList.add(`page__body--inactive`);
    loginField.focus();
  });

  loginCloseBtn.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    loginModal.classList.add(`hidden`);
    page.classList.remove(`page__body--inactive`);
  });

  loginModal.addEventListener(`click`, (evt) => {
    if (evt.target === loginModal) {
      loginModal.classList.add(`hidden`);
      page.classList.remove(`page__body--inactive`);
    }
  });
}
