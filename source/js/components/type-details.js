'use strict';

const typeElements = document.querySelectorAll(`.payment-type`);
const mobileScreen = window.matchMedia(`(max-width: 799px)`);


if (typeElements) {
  for (const typeElement of typeElements) {
    if (mobileScreen.matches) {
      typeElement.classList.add(`payment-type--closed`);
    }
    typeElement
        .querySelector(`.payment-type__header`)
        .addEventListener(`click`, () => {
          typeElement.classList.toggle(`payment-type--closed`);
        });
  }

  mobileScreen.addEventListener(`change`, () => {
    if (mobileScreen.matches) {
      for (const typeElement of typeElements) {
        typeElement.classList.add(`payment-type--closed`);
      }
    }
  });
}
