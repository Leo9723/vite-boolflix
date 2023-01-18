<script>
export default {
    methods: {
        search(){
            this.name = this.name.split(' ')
            this.name = this.name.join('+')
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