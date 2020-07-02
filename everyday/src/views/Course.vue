<template>
    <div class="course_container">
        <!-- 头部 -->
      <div class="course_top_contaier">
       <div class="course_top_left">特色课</div>
       <div class="course_top_right">
           <img src="../assets/sousuo.png" class="course_top_right_icon" alt="">
       </div>
      </div>

      <!-- 筛选栏 -->
      <div class="course_sort_container">
         
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    components: {},
    data() {
        return {

        };
    },
    computed: {},
    methods: {},
    mounted() {
        axios.get('').then((response)=>{
            window.console.log(response.data)
        })
    },
    }
</script>
<style>
.course_container{
    width:100vw;
    height: 100vh;
}
.course_top_contaier{
   width:100%;
   height: 50px;
   display: flex;
   justify-content: flex-end;
   align-items:center;
   border-bottom:1px solid rgb(228, 228, 228);
   position:relative;
}
.course_top_left{
    position:absolute;
    left:45%;
}
.course_top_right_icon{
    width:25px;
    height: 25px;;
}
.course_sort_container{
    width:100%;
    height: 50px;
    background:pink;
    display: flex;
    justify-content: space-around;
    align-items:center;;
}

</style>