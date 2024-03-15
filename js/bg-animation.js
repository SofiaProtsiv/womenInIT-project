setTimeout(() => {
  document.querySelector('.overlay').classList.add('gradient');
}, 300);

// setTimeout(() => {
  document.querySelector('section').classList.add('animate');
// }, 200);

setTimeout(() => {
  document.querySelectorAll('[data-animatedFadeInUp]').forEach(element => {
    element.classList.add('animatedFadeInUp');
  });
  document.querySelectorAll('[data-animatedFadeInDown]').forEach(element => {
    element.classList.add('animatedFadeInDown');
  });
}, 300);
