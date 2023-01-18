<script>
export default {
    props: {
        series: Object,
        num: Number
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
            {{ star(series.vote_average) }}
          </div>
        </div>
    </div>
    </div>
    </div>
</template>
<style lang="">
    
</style>