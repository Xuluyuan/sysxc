<template>
<!-- 底部选项卡 -->
  <div class="bottom">
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="index" >
        <span id="my_index" >首页</span>
        <img v-if="selected==null" src="../assets/images/enabledIndex.png" slot='icon'>
        <img v-else-if="selected=='index'" src="../assets/images/enabledIndex.png" slot='icon'>
        <img v-else src="../assets/images/disabledIndex.png" slot='icon'>
      </mt-tab-item>
      <mt-tab-item id="orderMeal">
        点单
        <img v-if="selected=='orderMeal'" src="../assets/images/enabledordermeal.png" slot='icon'>
        <img v-else src="../assets/images/disabledordermeal.png" slot='icon'>
      </mt-tab-item>
      <mt-tab-item id="takeMeal">
        取餐
        <img v-if="selected=='takeMeal'" src="../assets/images/enabledtakemeal.png" slot='icon'>
        <img v-else src="../assets/images/disabledtakemeal.png" slot='icon'>
      </mt-tab-item>
      <mt-tab-item id="me">
        我的
        <img v-if="selected=='me'" src="../assets/images/enabledme.png" slot='icon'>
        <img v-else src="../assets/images/disabledme.png" slot='icon'>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data(){
    return{
      selected:sessionStorage.getItem('barId'),
      my_index:"style= 'color:red' "
    }
  },
  watch:{
    selected(){
      if(this.selected=='index'){
        this.$store.commit("changeBarId",'index')
        this.$router.push('/')
      }else if(this.selected=='orderMeal'){
        this.$store.commit("changeBarId",'orderMeal')
        this.$router.push('/ordermeal')
      }else if(this.selected=='takeMeal'){
        this.$store.commit("changeBarId",'takeMeal')
        this.$router.push('/takemeal')
      }else{
        this.$store.commit("changeBarId",'me')
        this.$router.push('/me')
      }
    }
  },
  mounted(){
    if(this.selected==null){
      let index=document.getElementById('my_index')
      index.style.color="#f90"
    }
  }
}
</script>
<style scoped>
 .mint-tabbar>.mint-tab-item.is-selected{
   color: #f90;
 }
 
 a.mint-tab-item{
   color: #ABABAB;
 }
</style>
