const input = document.querySelector('input');
const games = document.querySelectorAll('#songs img');

input.addEventListener('input', () => {
  const searchTerm = input.value.toLowerCase();
  games.forEach(game => {
    game.style.display = game.alt.toLowerCase().includes(searchTerm) ? 'block' : 'none';
  });
});
