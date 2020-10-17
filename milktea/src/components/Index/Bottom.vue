<template>
<!-- 底部选项卡 -->
  <div class="bottom">
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="index">
        首页
        <img v-if="selected=='index'" src="../../assets/images/enabledIndex.png" slot='icon'>
        <img v-else src="../../assets/images/disabledIndex.png" slot='icon'>
      </mt-tab-item>
      <mt-tab-item id="orderMeal">
        点单
        <img v-if="selected=='orderMeal'" src="../../assets/images/enabledordermeal.png" slot='icon'>
        <img v-else src="../../assets/images/disabledordermeal.png" slot='icon'>
      </mt-tab-item>
      <mt-tab-item id="takeMeal">
        取餐
        <img v-if="selected=='takeMeal'" src="../../assets/images/enabledtakemeal.png" slot='icon'>
        <img v-else src="../../assets/images/disabledtakemeal.png" slot='icon'>
      </mt-tab-item>
      <mt-tab-item id="me">
        我的
        <img v-if="selected=='me'" src="../../assets/images/enabledme.png" slot='icon'>
        <img v-else src="../../assets/images/disabledme.png" slot='icon'>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data(){
    return{
      selected:'index'
    }
  },
  watch:{
    selected(){

    }
  }
}
</script>
<style scoped>
 /* .bottom span{
   color:#999
 } */
 .mint-tabbar>.mint-tab-item.is-selected{
   color: #f90;
 }
 a.mint-tab-item.is-selected{
   text-decoration: none;
 }
 a.mint-tab-item{
   color: #ABABAB;
 }
</style>