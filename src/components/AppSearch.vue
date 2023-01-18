<script>
export default {
    data(){
        return {
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
        <input type="text" name="" id="" v-model="name" @keyup.enter="search">
    </div>
</template>
<style lang="">
    
</style>