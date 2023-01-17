<script>
import { store } from '../store.js'
import Movie from './Movie.vue'
import AppSearch from './AppSearch.vue'
import axios from 'axios'

export default {
    components: {
        Movie,
        AppSearch,
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
            let newUrl = store.url;
            if(word != undefined) {
    
              newUrl += `${word}`
    
            }
              axios.get(newUrl).then((response) => {
              console.log(response.data.results)
              store.FilmList = response.data.results
            })
          }
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
      </div>
    </div>
</template>
<style lang="">
    
</style>