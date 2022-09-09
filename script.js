const fbBtn = document.getElementById('share-facebook');
const tBtn = document.getElementById('share-twitter');
const pBtn = document.getElementById('share-pinterest');
const img = document.getElementById('animImg');
const titleElement = document.querySelector('.title');

fbBtn.addEventListener('click', () => {
  alert('Share on Facebook');
});

tBtn.addEventListener('click', () => {
  alert('Share on Twitter');
});

pBtn.addEventListener('click', () => {
  alert('Share on Pinterest');
});

img.addEventListener('mouseover', () => {
  titleElement.classList.add(
    'animate__animated',
    'animate__heartBeat'
  );
});
