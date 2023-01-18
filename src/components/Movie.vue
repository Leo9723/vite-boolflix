<script>
export default {
  data(){
    return {
    }
  },
    props: {
        film: Object,
        key: Number
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
        <div class="cardContainer">
        <div class="card">
          <div class="image">
            <img :src="`https://image.tmdb.org/t/p/w500${film.poster_path}`" alt="">
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
            <div class="star" v-if="star(film.vote_average) == 0">
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <div class="star" v-else-if="star(film.vote_average) == 1">
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <div class="star" v-else-if="star(film.vote_average) == 2">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <div class="star" v-else-if="star(film.vote_average) == 3">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <div class="star" v-else-if="star(film.vote_average) == 4">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <div class="star" v-else="star(film.vote_average) == 5">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
          </div>
        </div>
    </div>
    </div>
</template>
<style lang="">
    
</style>