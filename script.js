const fbBtn = document.getElementById('share-facebook');
const tBtn = document.getElementById('share-twitter');
const pBtn = document.getElementById('share-pinterest');

fbBtn.addEventListener('click', () => {
  alert('Share on Facebook');
});

tBtn.addEventListener('click', () => {
  alert('Share on Twitter');
});

pBtn.addEventListener('click', () => {
  alert('Share on Pinterest');
});
