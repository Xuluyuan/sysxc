<template>
    <div id="detail">
      <div id="top">
         <div class="t2">
            <img @click="home" src="../assets/images/index_imgs/jt.png">
            <h3>书亦烧仙草</h3>
        </div>
        <div class="title_1">
                <p>有颜有料，新品"椰椰烧仙草"超正椰</p>
                <div class="title_2">
                    <span>书亦烧仙草</span>  
                    <span>3天前</span>
                </div>
        </div>
        <img src="../assets/images/shop_imgs/001.jpg"  :style="{width:innerWidth+'px'}">
        <div class="title_3">
            <img src="../assets/images/shop_imgs/xia.png" alt="">
            <p>点个"分享"，下次宠你哦</p>
            <span>阅读<p>8.8万</p></span>
            <hr>
            <div class="title_4">
                <div>
                    <img class="t4_img" src="../assets/images/shop_imgs/dz.png" alt="">
                    <div>
                        <p>赞 288</p>
                    </div>
                </div>
            </div>
        </div>
      </div>    

        <div class="title_5">
            <div>
                <img class="t5_img" src="../assets/images/shop_imgs/tx.png" alt="">
                <div v-if="issend" class="t5_2">
                    <!-- <p>写下你的留言</p> -->
                    <textarea placeholder="留言被公众号精选后，会对所有人展示"></textarea>
                </div>
                <div v-else @click="send" class="t5_1">
                    <p>写下你的留言</p>
                </div>
            </div>
        </div>

        <div class="title_6" @click="nosend">
            <p>精选留言</p>
            <div v-for="(value,key) of 5" :key="key" class="t_ly">
                <img class="t5_img" :src="liuyan.img" alt="">
                <p>{{liuyan.name}}</p>
                <p>{{liuyan.send}}</p>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            innerWidth:window.innerWidth - 40,
            liuyan:{
                img:require('../assets/images/shop_imgs/tx.png'),
                name:'靓仔',
                send:'红红火火恍恍惚惚的开始建设开发技术的开发就看见回房间合适的机会'
            },
            issend:false
        }
    },
    created(){
        window.addEventListener('resize',()=>{
        this.innerWidth=window.innerWidth;
    })
    },
    methods:{
        home(){
            this.$router.push('/')
        },
        send(){
            this.issend=true;
        },
        nosend(){
            this.issend=false;
        }
    }
}
</script>

<style>
    body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #FDFDFD;
  }

    div h3{
    text-align: center;
    margin-bottom: 10px;
    }
    a{
    text-decoration: none;
}
    .router-link-active {
    text-decoration: none;
}

    #top{
        margin-left: 20px;
        margin-right: 20px;
        position: relative;
    }
    hr{
        color: #F3F3F3;
    }
    .t2{
       position: relative;
    }
    .t2>img{
        position: absolute;
        top: -3px;
        left: 7px;
    }
    .title_1 p{
        font-size: 23px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .title_2{
        margin-bottom: 20px;
    }
    .title_2>span:first-child{
        color: #576B95;
        margin-right: 8px;
    }
    /* span:last-child{
        color: #BABABA;
    } */
    .title_2>span:nth-child(2){
        color: #BABABA;
    }
    .title_3{
        height: 100px;
    }
    .title_3>img:first-child{
        margin-left: 5px;
    }
    .title_3>p:nth-child(2){
        position: absolute;
        top: 663px;
        left: 26px;
        font-size: 10px;
        color: #8B8B8B;
    }
    .title_3>span:nth-child(3){
        font-size: 17px;
        margin-top: 27px;
        display: block;
        color: #B3B3B3;
        margin-left: 6px;
    }
    .title_3>span:nth-child(3) p{
        display: inline;
    }
    .t4_1>:nth-child(1){
        display: inline;
    }
    .t4_2>:nth-child(2){
        display: inline;
    }
    .title_4{
        color: #576B95;
        font-size: 14px;
        margin-left: 261px;
        margin-top: -11px;
    }
    .title_4 div{
        display: inline-block;
    }
    .title_4 img{
        margin-right: 10px;
        margin-bottom: -2px;
    }
    .title_5{
        margin-top: 30px;
        background-color: #F2F2F2;
        
    }
    .t5_1{
        background-color: #E9E9E9;
        height: 41px;
        margin-left: 63px;
        margin-right: 20px;
        margin-top: -36px;
    }
     .t5_2{
        background-color: #E9E9E9;
        height: 41px;
        margin-left: 63px;
        margin-right: 20px;
        margin-top: -36px;
    }
    .t5_2 textarea{
        background: #fff;
        resize: none;
        border: none;
        height: 37px;
        width: 288px;
    }
    textarea::placeholder{
        color: #B3B3B3;
    }
    .t5_img{
        margin-top: 16px;
        margin-left: 13px;
    }
    .t5_1>p{
        color: #757575;
        font-size: 15px;
        padding-top: 10px;
        padding-left: 7px;
    }
    .title_5>p:nth-child(2){
        color: #888888;
        margin-left: 10px;
    }
    .t_ly>p:nth-child(2){
        color: #888888;
        margin-left: 60px;
        margin-top: -43px;
    }
    .t_ly p:nth-child(3){
        color: #333333;
        margin-left: 57px;
        margin-top: -12px;
        margin-bottom: 0;
    }
    .title_6{
        background-color: #F2F2F2;
    }
    .title_6>p{
        margin-left: 10px;
        margin-top: -2px;
        padding-top: 22px;
        margin-bottom: 6px;
        color: #888888;
    }
</style>