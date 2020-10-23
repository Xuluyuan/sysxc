<template>
  <div class="cartCount">
    <button @click="minus(indicator,btn_index)"  class="minus">-</button>
    <label class="cart-count">{{this.$store.state.btn_count[indicator][btn_index]}}</label>
    <button @click="add(indicator,btn_index)" class="add">+</button>
  </div>
</template>
<script>
export default {
  mounted(){

  },
  props:{
    btn_index:{
       type:Number
    },
    drinkList:{
      type:Array
    },
    indicator:{
      type:Number
    }
  },
 methods:{
   
  minus(i1,i2){
    console.log(this.indicator,this.btn_index)
    if(this.$store.state.btn_count[i1][i2]>0){
      this.$store.commit('dec',{
         n1:i1,
         n2:i2,
      })
    }
  },
  add(i1,i2){
    console.log(this.indicator,this.btn_index)
    this.$store.commit('inc',{
      n1:i1,
      n2:i2,
    })
    
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