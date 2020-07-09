<template>
<div>
    <div><img :src="mass.image" /></div>
    <div>{{mass.name}}</div>
</div>
</template>
<script>
export default {
    data(){
        return{
            mass:this.$route.params.mass
        }
    },
    mounted(){
       console.log(this.$route.params.mass) 
    }
}
</script>
<style  scoped>

</style>