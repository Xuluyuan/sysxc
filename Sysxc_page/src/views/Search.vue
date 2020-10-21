<template>
  <div class="search">
    <mt-header title="书亦烧仙草">
       <router-link to="/ordermeal" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <mt-search v-model="value" class="value"></mt-search>
  </div>
</template>
<script>
export default {
  data(){
    return{
      value:''
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