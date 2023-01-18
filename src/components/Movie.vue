<script>
import axios from 'axios'
import { store } from '../store.js'

export default {
  data(){
    return {
      store,
      CastList: [],
    }
  },
    props: {
        film: Object,
    },
    created(){
      let castUrl = "https://api.themoviedb.org/3/movie/"
        castUrl += `${this.film.id}/credits?api_key=cbf0f0875d9b4297f36cceb44d4d7f83`
        axios.get(castUrl).then((response) => {
              this.CastList = response.data.cast.slice(0, 5)
            })
    },
    methods: {
      star(vote) {
       let newVote = parseInt(Math.ceil(vote / 2))
        return newVote
      },
      country(language) {
        if (language == 'en') {
          language = 'gb'
        }


        language = language.toUpperCase()


        let newImgUrl = 'https://flagsapi.com/'

        newImgUrl += `${language}/flat/64.png`

        return newImgUrl
      }
    }
}
</script>
<template lang="">
    <div>
        <div class="cardContainer">
        <div class="card">
          {{ film }}
          <div class="image">
            <img :src="`https://image.tmdb.org/t/p/w500${film.poster_path}`" alt="">
          </div>
          <div class="cast">
            <div v-for = 'item in CastList'>
              {{ item.original_name }}
            </div>
          </div>
          <div class="name">
            {{ film.title }}
          </div>
          <div class="original-name">
            {{ film.original_title }}
          </div>
          <div class="language">
            <img :src="country(film.original_language)" :alt="film.original_language"/>
          </div>
          <div class="vote">
            <div class="star">
              <i class="fa-solid fa-star" v-for="i in star(film.vote_average)"></i>
              <i class="fa-regular fa-star" v-for="i in 5 - star(film.vote_average)"></i>
            </div>
          </div>
        </div>
    </div>
    </div>
</template>
<style lang="">
    
</style>