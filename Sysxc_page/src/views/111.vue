<template>
  <div>
    <button v-for="(sum,index) of 5" :key="index" @click="change($event,index)">{{sum}}</button>
  </div>
</template>
<script>
export default {
  methods:{
    change(e,i){
      console.log(e.target.innerHTML)
    }
  }
}
</script>