<script>
import { store } from '../store.js'
import Movie from './Movie.vue'
import Series from './Series.vue'
import AppSearch from './AppSearch.vue'
import AppSelect from './AppSelect.vue'
import axios from 'axios'

export default {
    components: {
        Movie,
        AppSearch,
        AppSelect,
        Series,
    },
    data(){
        return{
            store,
        }
    },
    created(){
        this.GetGenres()
    },
    computed:{
        FilmList(){
            if(this.store.SelectedGenre){
                return this.store.FilmList.filter((item)=>item.genre_ids.includes(this.store.SelectedGenre))
            }

            return this.store.FilmList
        },
        SeriesList(){
            if(this.store.SelectedGenre){
                return this.store.SeriesList.filter((item)=>item.genre_ids.includes(this.store.SelectedGenre))
            }

            return this.store.FilmList
        }
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
              store.FilmList = response.data.results
            })
            axios.get(newSeriesUrl).then((response) => {
              store.SeriesList = response.data.results
            })
          },
          GetGenres(){
            axios.get(store.GenreUrl).then((response) => {
              store.GenreList = response.data.genres
            })
          },
    }
}
</script>
<template lang="">
    <div>
        <div class="search">
        <AppSearch @search="GetMovie"></AppSearch>
        <AppSelect></AppSelect>
    </div>
    <div class="maincont">
          <div v-if="FilmList.length > 0">FILM</div>
          <Movie v-for="(film, index) in FilmList" :film="film" :key="film.id" />
          <div v-if="SeriesList.length > 0">SERIE TV</div>
          <Series v-for="(series, num) in SeriesList" :series="series" :key="series.id" />
      </div>
    </div>
</template>
<style lang="">
    
</style>