<template>
  <div class="cartCount">
    <button @click="minus(btn_index)"  class="minus">-</button>
    <label class="cart-count">{{this.$store.state.btn_count[btn_index]}}</label>
    <button @click="add(btn_index)" class="add">+</button>
  </div>
</template>
<script>
// import Vue from 'vue'
export default {
  props:{
    btn_index:{
       type:Number
    },
    drinkList:{
      type:Array
    },
    drinks:{
      type:Array
    }
  },
 methods:{
  minus(i){
    if(this.$store.state.btn_count[i]>0){
      this.$store.commit('dec',i)
    }
  },
  add(i){
    this.$store.commit('inc',i)
  }
 }

}
</script>
<style scoped>
 .cartCount label{
   margin:0 10px 0 10px ;
 }
 .cartCount .minus{
  border: 1px solid #ccc;
}
.cartCount .add{
  border:none;
  background-color: #EAB488;
  color: #fff;
}
.cartCount .add:focus,.minus:focus{
  border: 0 none;
  outline: none;
}
.cartCount button{
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
.cartCount{
  float: right;
}
</style>