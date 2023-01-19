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
        <img src="/public/logo.png" alt="" v-if="store.logo">
        <img src="/public/logo.png" class="small" alt="" v-else>
    </div>
</template>
<style lang="scss" scoped>
div{
    display: flex;
    justify-content: center;
    img{
       width: 70%;
       
    }
    .small{
        width: 10%;
    }
}
</style>