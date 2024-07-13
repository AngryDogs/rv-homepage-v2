document.getElementById('est').addEventListener('click', () => {
  switchLanguage('est');
});

document.getElementById('eng').addEventListener('click', () => {
  switchLanguage('eng');
});

function switchLanguage(lang) {
  document.querySelectorAll('[data-est]').forEach((el) => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}
