<template>
  <div id="home">
    <h3>首页</h3>
    <!-- 轮播 -->
    <carousel></carousel>
    <!-- 列表 -->
    <!-- <router-link to="/ordermeal" > -->
    <div class="list_1" @click="toOrderMeal">
      <img src="../assets/images/index_imgs/spcar.jpg" alt />
      <div class="list1_1">
        <h2>开始点单</h2>
        <span>无需排队·快速点单</span>
      </div>
    </div>
    <!-- </router-link> -->

    <router-link to="/shop">
      <div class="list_2">
        <img src="../assets/images/index_imgs/hy.jpg" alt />
        <div class="list2_2">
          <h4 class="h5">会员积分</h4>
          <span>优享派卷·兑换礼品</span>
          <!-- <button>兑换</button> -->
        </div>
      </div>
    </router-link>

    <router-link to="/detail">
      <div class="list_3">
        <img src="../assets/images/index_imgs/ewm.jpg" alt />
        <div class="list3_3">
          <h4 class="h6">关注公众号</h4>
          <span>更多福利等你解锁</span>
          <!-- <button>兑换</button> -->
        </div>
      </div>
    </router-link>

    <router-link to="/shop">
      <div class="list_4">
        <div class="list4_4">
          <p class="pp">
            0
            <span>积分</span>
          </p>
          <span>可前往积分商城兑换商品</span>
        </div>
      </div>
    </router-link>
    <!-- 脚部 -->
    <my-bottom></my-bottom>
  </div>
</template>

<script>
//引入轮播组件对象
import carousel from "../components/Carousel";
import myBottom from "../components/Bottom";
export default {
  //将carousel作为子组件
  components: { carousel, myBottom },

  methods: {
    toOrderMeal() {
      this.$store.commit("changeBarId", "orderMeal");
      this.$router.push("/ordermeal");
    }
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #fdfdfd;
}

div h3 {
  text-align: center;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 18px;
}
a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
/* -------------- */
.list_1 {
  color: #000;
  height: 125px;
  /* background-color: pink; */
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 4%;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
}
.list_1>img {
  margin-left: 70px;
  margin-top: 37px;
}
.list1_1 h2{
    margin-left: 137px;
    margin-top: -48px;
    margin-bottom: 23px;
    font-weight: bold;
    font-size: 24px;
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
  background-color: #f2f2f2;
}
.list_2>img{
  margin-left: 34px;
  margin-top: 23px;
}
/* .h5{
  margin-left: 95px;
  margin-top: -46px;
} */
.list2_2{
  margin-top: -45px;
}
.list2_2>h4{
  font-size: 16px;
  font-weight: bold;
  margin-left: 95px;
  margin-top: 4px;
}
.list2_2 span{
  display: block;
  margin-left: 94px;
  margin-top: -5px;
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
  background-color: #f2f2f2;
}
.list_3>img{
  margin-left: 34px;
  margin-top: 23px;
}
.h6{
  margin-left: 95px;
  margin-top: -46px;
}
.list3_3{
  margin-top: -45px;
}
.list3_3>h4 {
    font-size: 16px;
    font-weight: bold;
    margin-left: 95px;
    margin-top: 4px;
}
.list3_3 span{
  display: block;
  margin-left: 94px;
  margin-top: -6px;
  font-size: 15px;
  color: #9f9f9f;
}

.list_4{
  color: #000;
  height: 100px;
  margin-top: 59px;
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 4%;
  background-color: #ffffff;
  padding-bottom: 50px;
}
.list4_4{
  
}
/* .list4_4 span{
  margin-top: 10px;
} */
.pp {
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
  margin-top: -5px;
  font-size: 15px;
  color: #9f9f9f;
}

/* ------------------------ */
</style>



