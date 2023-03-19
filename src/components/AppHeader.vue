<script>
import { store } from '../store.js'

export default {
    data(){
        return{
            store
        }
    }
}
</script>
<template lang="">
    <div>
        <img src="/public/logo.png" alt="" :class="store.logo != true ? 'small' : ''">
    </div>
</template>
<style lang="scss" scoped>
div{
    display: flex;
    justify-content: center;
    img{
       width: 70%;
       transition: all 0.3s;
       
    }
    .small{
        width: 10%;
    }
}
</style>