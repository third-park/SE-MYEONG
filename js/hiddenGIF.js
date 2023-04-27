const accordions = document.querySelectorAll('.accordion-item');

accordions.forEach((accordion) => {
  accordion.addEventListener('hidden.bs.collapse', () => {
    const gif = accordion.querySelector('img');
    gif.src = gif.src;
  });
});