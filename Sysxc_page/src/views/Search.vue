<template>
  <div class="search">
    <mt-header title="书亦烧仙草">
       <router-link to="/ordermeal" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <mt-search v-model="value" class="value" @blur.native.capture="searchData"></mt-search>
    <div>
      <img src="../assets/img/shibai.gif" alt="" class="fail">
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      value:'',
      searchList:[]
    }
  },
  methods:{
   searchData(){
      this.axios.get("/like",{
        params:{like:this.value}
      }).then(res=>{
        console.log(res.data.result)
        this.searchList=res.data.result;
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
.search .fail{
  width: 300px;
  height: 300px;
}
</style>