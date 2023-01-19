<script>
import { store } from '../store.js'

export default {
    data(){
        return {
            store,
            name: ''
        }
    },
    methods: {
        search(){
            this.$emit('search', this.name)
        }
    }
}
</script>
<template lang="">
    <div>
       Cerca: <input type="text" name="" id="" v-model="name" @keyup.enter="search">
    </div>
</template>
<style lang="scss" scoped>
@use './styles/partials/mixins' as *;

    input {
        @include my-border-red
        }
</style>