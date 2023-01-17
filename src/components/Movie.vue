<script>
export default {
    props: {
        film: Object,
        key: Number
    }
}
</script>
<template lang="">
    <div>
        <div class="cardContainer">
        <div class="card">
          <div class="image">
            <img :src="film.poster_path" alt="">
          </div>
          <div class="name">
            {{ film.title }}
          </div>
          <div class="original-name">
            {{ film.original_title }}
          </div>
          <div class="language">
            {{ film.original_language }}
          </div>
          <div class="vote">
            {{ film.vote_average }}
          </div>
        </div>
    </div>
    </div>
</template>
<style lang="">
    
</style>