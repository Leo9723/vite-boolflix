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
        /* recupero generi nel select a caricamento pagina*/
        this.GetGenres()
    },
    computed:{
        /* filtraggio film per genere */
        FilmList(){
            if(this.store.SelectedGenre){
                return this.store.FilmList.filter((item)=>item.genre_ids.includes(this.store.SelectedGenre))
            }

            return this.store.FilmList
        },
        /* filtraggio serie tv per genere */
        SeriesList(){
            if(this.store.SelectedGenre){
                return this.store.SeriesList.filter((item)=>item.genre_ids.includes(this.store.SelectedGenre))
            }

            return this.store.SeriesList
        }
    },
    methods: {
        /* recupero film in base alle parole inserite nel search */
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

            store.logo = false
          },
          /* recupero generi (da usare nel created) */
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
            <!-- ricerca per nome -->
            <AppSearch @search="GetMovie"></AppSearch>
            <div class="select">
                <!-- ricerca per genere -->
                Seleziona il genere: 
                <AppSelect></AppSelect>
            </div>
        </div>
        <div class="maincont">
            <!-- row film -->
            <div v-if="FilmList.length > 0" class="category">FILM</div>
            <div class="film">
                <Movie v-for="(film, index) in FilmList" :film="film" :key="film.id" />
            </div>
            <!-- row serie tv -->
            <div v-if="SeriesList.length > 0" class="category">SERIE TV</div>
            <div class="series">
                <Series v-for="(series, num) in SeriesList" :series="series" :key="series" />
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    div{
        .category {
            padding: 20px 30px;
            font-size: large;
            font-weight: bold;
        }
        .search {
            display: flex;
            justify-content: space-between;
            padding: 40px 20px;
            .select {
                display: flex;
            }
        }
        .film{
            display: flex;
            overflow-x: auto;
        }
        .series{
            display: flex;
            overflow-x: auto;
        }
    }
</style>