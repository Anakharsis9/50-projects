Vue.component("PokemonCard", {
  template: `
  <div :style="{backgroundColor: cardColor}" class="pokemon-card">
          <div class="image-wrapper">
            <img class="image" :src="pokemon.sprites.versions['generation-v']['black-white'].animated['front_default']" alt="pokemon-image" />
          </div>
          <div class="pokemon-id">{{pokemonIdText}}</div>
          <div class="pokemon-name">{{pokemon.name}}</div>
          <div class="pokemon-type">Type: {{pokemonType}}</div>
  </div>
  `,
  props: {
    pokemon: {
      type: Object,
    },
  },
  data: () => ({}),
  computed: {
    pokemonIdText() {
      let result = "#";
      if (this.pokemon.id < 10) result += "00" + this.pokemon.id;
      else if (this.pokemon.id < 100) result += "0" + this.pokemon.id;
      else result += this.pokemon.id;
      return result;
    },

    pokemonType() {
      return this.pokemon.types[0].type.name;
    },
    cardColor() {
      const colors = {
        fire: "#FDDFDF",
        grass: "#DEFDE0",
        electric: "#FCF7DE",
        water: "#DEF3FD",
        ground: "#f4e7da",
        rock: "#d5d5d4",
        fairy: "#fceaff",
        poison: "#98d7a5",
        bug: "#f8d5a3",
        dragon: "#97b3e6",
        psychic: "#eaeda1",
        flying: "#F5F5F5",
        fighting: "#E6E0D4",
        normal: "#F5F5F5",
      };
      return colors[this.pokemonType];
    },
  },
});

var app = new Vue({
  el: "#app",
  data: {
    pokemons: [],
  },
  created() {
    this.getPokemons();
  },
  methods: {
    async getPokemons() {
      const API_URL = "https://pokeapi.co/api/v2/pokemon/";
      const count = 150;

      for (let i = 1; i <= count; i++) {
        const response = await fetch(API_URL + i);
        this.pokemons.push(await response.json());
      }
    },
  },
});
