<script>
import { store } from '../store.js'
import Movie from './Movie.vue'
import Series from './Series.vue'
import AppSearch from './AppSearch.vue'
import axios from 'axios'

export default {
    components: {
        Movie,
        AppSearch,
        Series,
    },
    data(){
        return{
            store,
        }
    },
    created() {
        this.GetMovie();
    },
    methods: {
        GetMovie(word){
            let newMovieUrl = store.MovieUrl;

            let newSeriesUrl = store.SeriesUrl;

            if(word != undefined) {
    
              newMovieUrl += `${word}`

              newSeriesUrl += `${word}`
    
            }
              axios.get(newMovieUrl).then((response) => {
              console.log(response.data.results)
              store.FilmList = response.data.results
            })
            axios.get(newSeriesUrl).then((response) => {
              console.log(response.data.results)
              store.SeriesList = response.data.results
            })
          },
    }
}
</script>
<template lang="">
    <div>
        <div class="search">
        <AppSearch @search="GetMovie"></AppSearch>
    </div>
    <div class="maincont">
          <Movie v-for="(film, index) in store.FilmList" :film="film" :key="index" />
          SERIE TV
          <Series v-for="(series, num) in store.SeriesList" :series="series" :key="num" />
      </div>
    </div>
</template>
<style lang="">
    
</style>