<template>
  <div id="shop">
    <div class="t1">
      <img @click="home" src="../assets/images/index_imgs/jt.png" />
      <h3>积分商城</h3>
    </div>

    <div class="shop_1">
      <p>我的积分</p>
      <span>0</span>
      <p class="p3">
        获得积分后，积分有效期至
        <a>2021年12月31日</a>
      </p>
      <img class="mg1" src="../assets/images/shop_imgs/yuan.png" alt />
      <img class="mg2" src="../assets/images/shop_imgs/jf.png" alt />
    </div>

    <div class="shop_2">
      <img class="shop2_img" src="../assets/images/shop_imgs/shu.png" alt />
      <div class="shop2_1">
        <p>积分换券</p>
      </div>

      <div class="shop2_2">
        <div class="shop2_2t">
          <p>满10元减2元</p>
          <span>领取后当天生效，生效10天</span>
          <div class="s2_hc">
            <p>互斥券</p>
          </div>
          <div class="s2_m">
            <p>￥2</p>
            <span>满10元可用</span>
          </div>
        </div>
        <div class="shop2_2b">
          <div class="b2_l">
            <p>剩余可领次数：0</p>
            <img src="../assets/images/shop_imgs/r_jt.png" alt />
          </div>
          <div class="b2_r">
            <div class="b2_jf">
              <p>20积分</p>
            </div>

            <div class="b2_dh">
              <p>立即兑换</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    home() {
      this.$router.push("/");
    }
  }
};
</script>

<style>
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #fdfdfd;
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

.t1>img {
  margin-left: 10px;
  margin-top: 15px;
}
.t1 h3{
  margin-top: -33px;
  margin-left: -7px;
}
.shop_1{
  position: relative;
  height: 140px;
  background-color: #ffffff;
  border-bottom: 3px solid #f5f5f5;
}
.shop_1>p{
  font-size: 18px;
  color: #333333;
  margin-left: 35px;
  padding-top: 15px;
}
.shop_1 span{
  display: block;
  font-size: 45px;
  margin-left: 35px;
  font-weight: bold;
  color: #eab488;
}
.shop_1>.p3 {
  margin-top: -17px;
  font-size: 14px;
  color: #999999;
}
.shop_1>.p3 a {
  color: black;
}
.mg1{
  position: absolute;
  top: 30px;
  right: 30px;
}
.mg2{
  position: absolute;
  top: 41px;
  right: 41px;
}
.shop2_1{
  display: block;
  margin-top: -52px;
  font-size: 19px;
  margin-left: 33px;
}
.shop2_1 p{
    margin-top: 23px;
}
.shop2_img{
  margin-top: 10px;
  margin-left: 6px;
}

.shop2_2{
  height: 150px;
  margin-top: 23px;
  border: 2px solid #f5f5f5;
  margin-left: 8px;
  margin-right: 8px;
}
.shop2_2t>p{
  font-size: 18px;
  display: block;
  margin-top: 14px;
  margin-left: 37px;
}
.shop2_2t>span {
  font-size: 13px;
  display: block;
  margin-top: -16px;
  color: #858585;
  margin-left: 37px;
}
.s2_hc{
  width: 52px;
  height: 19px;
  border: 1px solid #d8d8d8;
  margin-left: 36px;
  margin-top: 4px;
}
.s2_hc>p {
  margin-top: 1px;
  font-size: 12px;
  margin-left: 8px;
  color: #999999;
}
.s2_m{
  position: absolute;
  right: 1px;
  right: 29px;
  top: 256px;
}
.s2_m>p {
  font-size: 27px;
  font-weight: bold;
  color: #eab488;
  margin-bottom: 4px;
}
.s2_m span {
  font-size: 16px;
  font-weight: bold;
  color: #898989;
}
.shop2_2b {
  height: 55px;
  /* background-color: pink; */
  margin-top: 12px;
  border-top: 1px dashed #eeeeee;
}
.b2_l img {
  position: absolute;
  top: 362px;
  left: 130px;
}
.b2_l>p {
  position: absolute;
  font-size: 14px;
  color: #9e9e9e;
  top: 360px;
  left: 22px;
}
.b2_jf {
  position: absolute;
  right: 86px;
  top: 354px;
  width: 85px;
  height: 30px;
  background-color: #eff3fe;
  border-radius: 16px;
}
.b2_jf p {
  font-size: 13px;
  position: absolute;
  right: 28px;
  top: 5px;
  color: #eab488;
}
.b2_dh {
  position: absolute;
  right: 24px;
  top: 354px;
  width: 85px;
  height: 30px;
  background-color: #eab488;
  border-radius: 16px;
}
.b2_dh p {
  font-size: 13px;
  position: absolute;
  right: 16px;
  top: 5px;
  color: white;
}

</style>