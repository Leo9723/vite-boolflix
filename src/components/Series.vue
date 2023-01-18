<script>
import axios from 'axios'

export default {
  data(){
    return {
      CastList: [],
    }
  },
    props: {
        series: Object,
        num: Number
    },
    created(){
      let castUrl = "https://api.themoviedb.org/3/tv/"
        castUrl += `${this.series.id}/credits?api_key=cbf0f0875d9b4297f36cceb44d4d7f83`
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
        if (language = 'en') {
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
        <div>
        <div class="cardContainer">
        <div class="card">
          <div class="image">
            <img :src="`https://image.tmdb.org/t/p/w500${series.poster_path}`" alt="">
          </div>
          <div class="cast">
            <div v-for = 'item in this.CastList'>
              {{ item.original_name }}
            </div>
          </div>
          <div class="name">
            {{ series.name }}
          </div>
          <div class="original-name">
            {{ series.original_name }}
          </div>
          <div class="language">
            <img :src="country(series.original_language)" :alt="series.original_language"/>
          </div>
          <div class="vote">
            <div class="star">
              <i class="fa-solid fa-star" v-for="i in star(series.vote_average)"></i>
              <i class="fa-regular fa-star" v-for="i in 5 - star(series.vote_average)"></i>
            </div>
          </div>
        </div>
    </div>
    </div>
    </div>
</template>
<style lang="">
    
</style>