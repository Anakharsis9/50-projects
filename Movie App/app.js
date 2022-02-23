Vue.component("Movie", {
  template: `<div class="movie">
              <div class="img-wrapper">
                <img :src="'https://image.tmdb.org/t/p/w1280'+movie.poster_path" class="img" alt="movie-img">
              </div>
              <div class="info">
                <div class="title">{{movie.title}}</div>
                <div  :class="ratingColorClass" class="rating">{{movie.vote_average}}</div>
              </div>
              <div class="overview">
              <span>Overview</span>
              <p class="overview-text">{{movie.overview}}</p>
            </div>
            </div>`,
  props: {
    movie: {
      type: Object,
    },
  },
  computed: {
    ratingColorClass() {
      return {
        cool: this.movie.vote_average > 8,
        middle: this.movie.vote_average < 8 && this.movie.vote_average > 5,
        bad: this.movie.vote_average < 5,
      };
    },
  },
});

var app = new Vue({
  el: "#app",
  data: {
    query: "",
    movies: [],
  },
  created() {
    this.getMovies();
  },
  methods: {
    async getMovies() {
      const API_URL =
        "https://api.themoviedb.org/3/discover/movie?api_key=1a4ab75ccec1c0bf3da808956913152c&sort_by=popularity.desc&page=1";

      const response = await fetch(API_URL);
      this.movies = (await response.json()).results;
    },

    async search() {
      const SEARCH_URL =
        "https://api.themoviedb.org/3/search/movie?api_key=1a4ab75ccec1c0bf3da808956913152c&page=1&query=";

      const response = await fetch(SEARCH_URL + this.query);
      this.movies = (await response.json()).results;
    },
  },
});
