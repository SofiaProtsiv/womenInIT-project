function animateNumber(callback, from, to, duration) {
  let start = null,
    animate = timestamp => {
      start = start || timestamp;
      let progress = Math.min((timestamp - start) / duration, 1);
      callback(progress * (to - from) + from);
      if (progress < 1) {
        window.requestAnimationFrame(animate);
      }
    };
  window.requestAnimationFrame(animate);
}


document.querySelectorAll("[data-number]").forEach((element) => {
  if (+element.dataset.number === 71800) {
    animateNumber(value => {
      element.textContent = "~" + Math.floor(value);
    }, 0, element.dataset.number, 2000);
  } else {
    animateNumber(value => {
      element.textContent = Math.floor(value) + "%";
    }, 0, element.dataset.number, 2000);
  }

})
