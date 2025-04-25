document.getElementById("searchForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let pokemonName = document.getElementById("pokemonName").value.trim().toLowerCase();

  if (pokemonName !== "") {
      let url = "https://pokeapi.co/api/v2/pokemon/" + pokemonName;
      fetch(url);
  }
});
