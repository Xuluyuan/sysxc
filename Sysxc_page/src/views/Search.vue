<template>
  <div class="search">
    <mt-header title="书亦烧仙草">
       <router-link to="/ordermeal" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <mt-search v-model="value" class="value" @blur.native.capture="searchData" ></mt-search>
     <div class="fail" v-show="searchList.length==0" v-if="value!=''">
       <!--   -->
      <img src="../assets/img/shibai.gif" alt="" class="failImg">
      <p class="failText">没有找到您喜欢的...</p>
    </div>
    <!-- <div v-show="value==''" style="padding:20px;color:red">
      <p>您输入的内容为空，请重新输入</p>
    </div> -->
    <!-- 搜索结果页面 -->
    <!--  -->
    <div class="searchList" v-show="searchList.length>0" >
      <div class="resultList" v-for="(list,index) of searchList" :key="index"  @click="myChoice(index)">
         <img :src=list.product_pic  class="img">
         <div class="listDesc">
           <p class="title">{{list.product_name}}</p>
           <p class="desc">{{list.product_describe}}</p>
           <span class="price">￥{{list.product_price}}</span>
          <mt-button size="small" class="choose">选口味</mt-button>
         </div>
         <!-- 详情页面 -->
         <div>
          
         </div>
      </div>
    </div>
  </div>
</template>
<script>
import myDetails from '../components/Details'
export default {
  
  data(){
    return{
      value:'',
      searchList:[]
    }
  },
  methods:{
    myChoice(index){

    },
   searchData(){
     if(this.value!=""){
        this.axios.get("/like",{
          params:{like:"%"+this.value+"%"}
        }).then(res=>{
          console.log(res.data.result)
          let data=res.data.result;
          data.forEach(ele => {
              ele.product_pic=require(`../assets/images/${ele.product_pic}`)
          });
          this.searchList=data
      })
     }else{
       this.searchList=[]
     }
    }
  },

}
</script>
<style scoped>
*{margin:0;padding: 0;}
.searchList .choose{
  background: #EAB488;
  color: #fff;
  text-align: center;
  font-size: 12px;
  border-radius: 20px;
  width: 60px;
  height: 25px;
  line-height: 25px;
  position: absolute;
  top: 54px;
  right: 0px;
}
.resultList{
  display: flex;
  margin-bottom: 30px;
  position: relative;

}
.listDesc{
  overflow: hidden;
  margin-left: 10px;
}
.resultList .desc{
   overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  color: #999;
}
.resultList .price{
  display: inline-block;
  width: 70px;
  margin-top: 20px;
}
.resultList .title{
  font-size: 15px;
  color: #000;
}
.searchList{
  padding: 20px;
}
.resultList img{
  width: 130px;
  height: 80px;
}
.mint-search.value{
height: 50px;
}
.value{
  color:#999
}
.mint-header{
  background-color:#EAB488;
}
.fail{
  position: relative;
}
.search .failImg{
  width: 150px;
  height: 150px;
  margin-left: 120px;
  margin-top: 100px;
}
.search .failText{
  font-size: 20px ;
  color: rgb(138, 132, 132);
  text-align: center;
}
</style>