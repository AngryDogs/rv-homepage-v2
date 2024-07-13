document.getElementById('est').addEventListener('click', () => {
  switchLanguage('et');
});

document.getElementById('eng').addEventListener('click', () => {
  switchLanguage('en');
});

function switchLanguage(lang) {
  document.querySelectorAll('[data-et]').forEach((el) => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}
