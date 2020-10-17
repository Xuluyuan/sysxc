<template>
  <div id="app">
      <h3>首页</h3>
      <!-- 轮播 -->
      <carousel></carousel>
      <!-- 列表 -->
      <router-link to="/about">
      <div class="list_1">
          <img src="../assets/images/index_imgs/spcar.jpg" alt="">
          <div class="list1_1">
              <h2>开始点单</h2>
              <span>无需排队·快速点单</span>
          </div>
      </div>
       </router-link>

       <router-link to="/shop">
      <div class="list_2">
          <img src="../assets/images/index_imgs/hy.jpg" alt="">
          <div class="list2_2">
              <h4 class="h5">会员积分</h4>
              <span>优享派卷·兑换礼品</span>
              <!-- <button>兑换</button> -->
          </div>
      </div>
       </router-link>

        <router-link to="/about">
      <div class="list_3">
          <img src="../assets/images/index_imgs/ewm.jpg" alt="">
          <div class="list3_3">
              <h4 class="h6">关注公众号</h4>
              <span>更多福利等你解锁</span>
              <!-- <button>兑换</button> -->
          </div>
      </div>
       </router-link>

        <router-link to="/about">
      <div class="list_4">
          <div class="list4_4">
              <p class="pp">0<span>积分</span></p>
              <span>可前往积分商城兑换商品</span>
          </div>
      </div>
       </router-link>
        <!-- 脚部 -->
        <bottom></bottom>
      
  </div>
</template>

<script>
//引入轮播组件对象
import carousel from "../components/Index/Carousel"
import bottom from "../components/Index/Bottom"
export default {
    //将carousel作为子组件
    components:{ carousel,bottom },
//     data(){
//         innerWidth:window.innerWidth
//     },
//     created(){
//     window.addEventListener('resize',()=>{
//       this.innerWidth=window.innerWidth;
//     })
//   },
}
</script>

<style scoped>
    
    /* -------------- */
    .list_1{
        color: #000;
        height: 125px;
        /* background-color: pink; */
        margin-top: 15px;
        margin-left: 20px;
        margin-right: 20px;
        border-radius: 4%;
        box-shadow: 0px 0px 10px 5px rgba(0,0,0,.1);
    }
    .list_1>img{
        margin-left: 70px;
        margin-top: 37px;
    }
    .list1_1 h2{
        margin-left: 137px;
        margin-top: -55px;
    }
    .list1_1 span{
        display: block;
        margin-left: 136px;
        margin-top: -19px;
        font-size: 15px;
        color: #9f9f9f;
    }
    /* -------列表23--------- */
     .list_2{
        color: #000;
        height: 85px;
        margin-top: 15px;
        margin-left: 20px;
        margin-right: 20px;
        border-radius: 4%;
        background-color: #F2F2F2;
    }
    .list_2>img{
        margin-left: 34px;
        margin-top: 23px;
    }
    .h5{
        margin-left: 95px;
        margin-top: -46px;
    }
    .list2_2 span{
        display: block;
        margin-left: 94px;
        margin-top: -20px;
        font-size: 15px;
        color: #9f9f9f;
    }
    

     .list_3{
        color: #000;
        height: 85px;
        margin-top: 15px;
        margin-left: 20px;
        margin-right: 20px;
        border-radius: 4%;
        background-color: #F2F2F2;
    }
    .list_3>img{
        margin-left: 34px;
        margin-top: 23px;
    }
    .h6{
        margin-left: 95px;
        margin-top: -46px;
    }
    .list3_3 span{
        display: block;
        margin-left: 94px;
        margin-top: -20px;
        font-size: 15px;
        color: #9f9f9f;
    }


     .list_4{
        color: #000;
        height: 75px;
        margin-top: 59px;
        margin-left: 15px;
        margin-right: 15px;
        border-radius: 4%;
        background-color: #ffffff;
        padding-bottom: 50px;
    }
     .pp{
        display: block;
        font-size: 25px;
        color: red;
        margin-left: 11px;
        margin-top: -46px;
        padding-top: 11px;
    }
    .list4_4>.pp>span{
       margin-left: 18px;
       margin-top: -23px;
    }
    .list4_4 span{
        display: block;
        margin-left: 12px;
        margin-top: -26px;
        font-size: 15px;
        color: #9f9f9f;
    }

    /* ------------------------ */
</style>


