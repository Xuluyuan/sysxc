<template>
  <div class="search">
    <mt-header title="书亦烧仙草">
       <router-link to="/ordermeal" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
  
    <mt-search v-model="value" class="value" @blur.native.capture="searchData"></mt-search>


  </div>
</template>
<script>
export default {
  data(){
    return{
      value:''
    }
  },
  methods:{
   searchData(){
      this.axios.get("/like",{
        params:{like:this.value}
      }).then(res=>{
        console.log(1)
        console.log(res.data.result)
      })
    }
  },

}
</script>
<style scoped>
.value{
  color:#999
}
.mint-header{
  background-color:#EAB488;
}
</style>