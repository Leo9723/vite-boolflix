<script>
import { store } from '../store.js'

export default {
    data(){
        return {
            store,
            genre: ''
        }
    },
    methods: {
        filter(){
            this.$emit('filter', this.genre)
        }
    }
}
</script>
<template lang="">
    <div>
        <select name="" id="" v-model="genre" @change="filter">
            <option :value="items.id" v-for="items in store.GenreList">
                {{ items.name }}
            </option>
        </select>
    </div>
</template>
<style lang="">
    
</style>