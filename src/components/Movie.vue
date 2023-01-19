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
        <div class="cardContainer">
        <div class="card">
          <!-- immagine -->
          <div class="image">
            <img :src="`https://image.tmdb.org/t/p/w342${film.poster_path}`" alt="">
              <div class="bkg-gray">
              </div>
          </div>
            <div class="name">
              {{ film.title }}
            </div>
            <!-- dettagli film -->
          <div class="details">
            <div class="overview">
              {{ film.overview }}
            </div>
            <div class="cast">
              <div v-for = 'item in CastList' class="actor">
                {{ item.original_name }}
              </div>
            </div>
            <div class="vote">
              <div class="star">
                <i class="fa-solid fa-star" v-for="i in star(film.vote_average)"></i>
                <i class="fa-regular fa-star" v-for="i in 5 - star(film.vote_average)"></i>
              </div>
            </div>
            <div class="language">
              <img :src="country(film.original_language)" :alt="film.original_language"/>
            </div>
          </div>
        </div>
    </div> 
</template>
<style lang="scss">
@use './styles/partials/variables' as *;
    .name {
        padding-top: 20px;
      }
    .cardContainer{
      margin: 30px;
      transition: all 0.25s;
      .card:hover .bkg-gray{
        opacity: 1;
      }
      .card:hover .details {
        opacity: 1;
      }
      .card{
        position: relative;
        color: white;
        .bkg-gray {
          height: 513px;
          width: 342px;
          background-color: rgba(0, 0, 0, 0.636);
          box-shadow: 0px 0px 20px rgb(37, 37, 37);
          position: absolute;
          top: 0px;
          opacity: 0;
          transition: all 0.25s;
        }
      }
      .details{
        margin: 15px;
        position: absolute;
        top: 20px;
        opacity: 0;
        transition: all 0.25s;
        .overview {
          font-size: small;
          margin-bottom: 15px;
        }
        .vote{
          margin: 15px 0px;
          .star{
            .fa-solid{
              color: yellow;
            }
          }
        }
        .language {
          img{
            background-color: $transparent;
          }
        }
      }
    }
    .language, .fa-star, .star, .vote, .actor, .cast, .overview, .details {
      background-color: $transparent;
    }
    .cardContainer:hover {
      scale: 1.1;
    }
</style>