const darkModeToggleButton = document.querySelector('[data-js="dark-mode"]');
darkModeToggleButton.addEventListener('change', () => {
  document.querySelectorAll('.dark').forEach(element => {
    element.classList.toggle('dark-mode');
  });
})