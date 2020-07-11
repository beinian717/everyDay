<template>
    <div class="search_container">
        <!-- 头部部分 -->
        <div class="search_top_container">
            <img @click="backClick" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAYAAAAGlsrkAAADgUlEQVRYR8XY+6ulUxzH8dcYYsglGteI/OASpsYPrkXKdRq5TogIM5Mf5D8RPx23URTygzCuTcYouSU1Ipo0buMSEWJCGPpMa9eeZ9az97P3efbxrdM5nf3s9V7ftb6Xz/dZ5H+yRQvEPQCnIb8/wdaFAAe2GidjL/yMuVmC98BRuAtHNk723VmB98T5uAIHV65z8yzA8fQ6XIAlaDL+nMVRH4JbcHpL0G7H09jQp8cnFU+PR7xu2md4Bu9hRx/grJH7vAYHVY72X7yPx/D1YDfzBe+NFViJ/N20vwr0Afw2/OF8wEfgSpxR8rMJ/REv4hVkA7vYtOATcROOrRxtACkS9+ND/FMLtEnBixHoHS35Gcg23IPvR5XjScAH4kJchn1a7vNVrMdP43pAV/C+uL3kZ+pt0/7G43gNf4yD5vNx4Hx+GO7EcZUFkyo/4OESvV2YO58ZBc59noOrcGjLigmeJ/EpsonO1gbO/5MqlyLH3HwuQbSxlL9fOtOGHqyBU31uxNktC/6O58vPbvnZdRNNcOrs9TgBOeqmfVXq7Ttt+TkN+CzcUPKzuaHc38d4FF92XXxcHqdpX4yrW/IzqfIR7isVqQ/uzqBJUYintSKfQrABLyMNvDcL+F4srayYbpKushnxulcL+G4cXlk10ZvCkECaCfhc3Iz9KvBIlU14Dr/26XI8TtpEmK1qgcfbLXhwXMeZZGPDaROlv7ZFvmTNrXiopNNE5bG2oWa+RoBHmi5D0qxpaQhpe6/PN8prJTN9N40haVaztL2kWBRjpxbYxePhZy4pRaXWJPLcG6WSTRV0o9pitPFyXIujW7xPO3yilNMd0wZX24lECNyKUyoPJMiiJgN/q0/wYK2U09tGSNls4Cm80DXoxkmfYSdy15kYLi8DdtPB5PvbZQPfjfN+EnDWSrFJr47wq5XZKJP07Gjqz0fBJwUP1orwy5R/TMuAllI7VwRgL4J+2IkM3Dn281paarRYxpeMMWk4u9i0Hg8H3UVl8s8Q3rRosg+wriny5wsegCKb0uH2bxlTI5vSYr8ZfKEvcNbLABclkwG9JhS/xbN4M/29T3DgeRWRJpNBoGYJukjjl/oGD2ARjhnYU3hqw8C6WYFz1GeWJlPL922zAsfzwQu2NcigMGxfzBI8AEXLBR6FkxE3Of3IQoCzgcBPLcGX105bFgq8W4T/B/tloBIPNqWNAAAAAElFTkSuQmCC" alt="">
            <div class="search_input">
                <input type="text" placeholder="请输入内容">
            </div>
            <div class="cancel_container">取消</div>
        </div>
        <div class="search_history_contanier">
            <div>
                <h3 style="margin-left:20px;">历史搜索</h3>
            </div>
            <div>
                <van-icon style="margin-right:20px;" name="delete" />
            </div>
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
    methods: {
        backClick(){
            window.history.back();
        }
    },
    mounted() {},
    }
</script>
<style  scoped>
.search_top_container{
    width:100%;
    height:50px;
    border-bottom:1px solid #999;
    display: flex;
    justify-content: space-around;
    align-items:center;
}
img{
    width:20px;
    height:20px;
    margin-left:20px;
}
.search_input{
    width:80%;
    height:90%;
    display: flex;
    justify-content: center;
    align-items: center;
}
input{
    width:90%;
    height:90%;
    border:none;
    border-radius:30px;
    background:#3333;
    padding-left:20px;
    box-sizing: border-box;
}
.cancel_container{
    width:11%;
    height:100%;
    color:#595959;
    display: flex;
    justify-content: center;
    align-items:center;
}
.search_history_contanier{
    width:100%;
    height:40px;
    display: flex;
    justify-content: space-between;
    align-items:Center;
    margin-top:20px;
}
</style>