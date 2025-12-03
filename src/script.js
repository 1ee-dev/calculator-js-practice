const btns = document.querySelectorAll('.btn');
const display = document.querySelector('.display-input');

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const value = btn.getAttribute('data-value');
    if (value === 'clear') {
      display.value = '';
    } else if (value === '=') {
      display.value = Math.round(eval(display.value) * 100) / 100;
    } else if (value === 'backSpace') {
      display.value = display.value.slice(0, -1);
      if (display.value === '') {
        display.value = '';
      }
    } else {
      display.value += value;
    }
  });
});
