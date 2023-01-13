const evalButtons = document.querySelector('.eval-buttons').children;
const submit = document.querySelector('[type="submit"]');
const cantSelected = document.querySelector('.selected span');
const thankStateContent = document.querySelector('.thank-state');
const ratingStateContent = document.querySelector('.rating-state');

let numButton = 0;

submit.addEventListener('click', thankFunction);

for (const button of evalButtons) {
  button.addEventListener('click', ratingSelected);
}

function ratingSelected() {
  // restart numButton
  numButton = 0;

  // Get number of buttons
  numButton = this.textContent;

  // Remove class `active`
  for (const button of evalButtons) {
    button.classList.remove('active');
  }

  // Add class `active` in range
  for (let i = 0; i < numButton; i++) {
    evalButtons[i].classList.add('active');
  }
}

function thankFunction() {
  cantSelected.textContent = numButton;
  thankStateContent.classList.remove('d-none');
  ratingStateContent.classList.add('d-none');
}
