<template>
  <div class="row" id="news">
    <article
      class="tarjetaNoticia card col-6 mb-3 mt-3"
      v-for="(movie, index) of movies"
      :key="index"
    >
      <div class="row no-gutters">
        <div class="tarjetaNotica__header col-md-4">
          <figure class="tarjetaNotica__figure" id="figuraHarry">
            <img
              :src="movie.Poster"
              alt=""
              class="tarjetaNotica__image card-img"
              id="imagenHarry"
            />
          </figure>
        </div>
        <div class="tarjetaNotica__body col-md-8">
          <div class="card-body">
            <div>
              <h2 class="tarjetaNotica__title card-title" id="tituloHarry">
                {{ movie.Title }}
              </h2>
              <p class="tarjetaNotica__copy card-text" id="parrafoHarry">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt beatae modi animi obcaecati quas atque quam quibusdam
                odio dolor sit?
              </p>
            </div>
            <div class="float-right">
              <a
                class="btn btn-primary"
                :href="`https://www.imdb.com/title/` + movie.imdbID"
                >noticia</a
              >
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SectionName",
  data() {
    return {
      movies: null,
    };
  },
  mounted() {
    axios
      .get("http://www.omdbapi.com/?s=harry+potter&type=movie&apikey=f5be261")
      .then((response) => {
        this.movies = response.data.Search.slice(0, 4);
        console.log(this.movies);
      });
  },
};
</script>

<style >
</style>
