<template>
    <div class="classify_container">
        <!-- 一级分类 -->
        <div class="classify_one_container">
            <div class="one_item">

            </div>
        </div>
        <!-- 二级分类 -->
        <div class="classify_two_container">

        </div>
    </div>
</template>

<script>

export default {
    components: {},
    data() {
        return {

        };
    },
    computed: {},
    methods: {},
    mounted() {},
    }
</script>
<style  scoped>
.classify_container{
    width:100%;
    display: flex;
    margin-top:1rem;
}
.classify_one_container{
    width:30%;
    height:550px;
    border:1px solid red;
    display: flex;
    flex-wrap:wrap;
    justify-content: flex-start;
    align-items:center;
}
.one_item{
    width:100%;
    height:100px;
    border:1px solid orange;
    display: flex;
    justify-content: center;
    align-items:center;
    color:#595959;
}
.classify_two_container{
    width:70%;
    height:550px;
    border:1px solid blue;
}
</style>