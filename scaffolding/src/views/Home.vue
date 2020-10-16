<template>
  <div class="home">
    <!-- 顶部 -->
    <div class="top">
      <div class="address">
        <p><span style="font-weight:bolder">2786书亦烧仙草深圳龙华星光城店 ><br> </span><span>约6.9km  </span><span style="font-size:12px;color:#999">广东省深圳市龙华区街道清泉路9号</span></p>
        <div><mt-button size="small" class="my-button">到店</mt-button></div>
      </div>
    </div>
    <!-- 左侧选项卡 -->
		<ul class="list-unstyled text-center nav-left " >
      <li @click="search" id="sear">
        <img src="../assets/images/search.png">
				<p class="font_small">搜索</p>
      </li>
			<li class="active" v-for='(desc,index) of descs' :key="index" @click="change(index)" data-i=index>
				<img :src=desc.img >
				<p class="font_small">{{desc.d}}</p>
			</li>
		</ul>
    <!-- 右侧商品详情 -->
   <div class="right-desc">
     <div class="cat">新品上线</div>
     <div v-for="(pro,index) of proList" :key="index">
       <div class="desc">
        <img :src=pro.img alt="">
        <div>
          <p class="desc-title">{{pro.title}}</p>
          <p class="desc-desc">{{pro.desc}}</p>
          <span class="dec-price">￥{{pro.price.toFixed(2)}}</span>
          <mt-button size="small" class="desc-button">选口味</mt-button>
        </div>
      </div>
      <div class="desc-type"><span>{{pro.type}}</span></div>
     </div>
   </div>
    <my-bottom></my-bottom>
  </div>
</template>
<script>
import myBottom from '../components/Bottom'
export default {
  components:{
    myBottom
  },
  data(){
    return{
      descs:[
        {d:'新品上线',img:require('../assets/images/new.png')},
        {d:'烧仙草系列',img:require('../assets/images/xiancai.png')},
        {d:'酸奶&益菌多系',img:require('../assets/images/suannai.png')},
        {d:'鲜果奶茶系',img:require('../assets/images/xianguo.png')},
        {d:'特调奶茶系',img:require('../assets/images/tediaonaicha.png')},
        {d:'推荐小料',img:require('../assets/images/xiaoliao.png')},
        {d:'温馨提示',img:require('../assets/images/wenxintishi.png')},
      ],
      proList:[
        {img:'/naicha/nc1.jpg',title:'元气桃桃',desc:'元气森林气泡水搭配饱满蜜桃，清凉爽口，元气无线',price:15.00,type:'元气新品'},
        {img:'/naicha/nc2.jpg',title:'元气桃桃',desc:'元气森林气泡水搭配饱满蜜桃，清凉爽口，元气无线',price:15.00,type:'元气新品'},
        {img:'/naicha/nc4.png',title:'元气桃桃',desc:'元气森林气泡水搭配饱满蜜桃，清凉爽口，元气无线',price:15.00,type:'元气新品'},
        {img:'/naicha/nc1.jpg',title:'元气桃桃',desc:'元气森林气泡水搭配饱满蜜桃，清凉爽口，元气无线',price:15.00,type:'元气新品'},
        {img:'/naicha/nc2.jpg',title:'元气桃桃',desc:'元气森林气泡水搭配饱满蜜桃，清凉爽口，元气无线',price:15.00,type:'元气新品'},
        {img:'/naicha/nc4.png',title:'元气桃桃',desc:'元气森林气泡水搭配饱满蜜桃，清凉爽口，元气无线',price:15.00,type:'元气新品'}
      ]

    }
  },
  methods:{
    // 根据产品分类导航栏传参来过滤想要的数据
     change(i){
      let lis=document.querySelectorAll('li:not(:first-child)')
       let sear=document.getElementById('sear')
       for(let n=0;n<7;n++){
         if(i==0){
           lis[n].className="active"
           sear.className=""
         }
         if(i!=n){
           lis[n].className=""
         }else{
           lis[n].className="active"
         }
       }
     },
     search(){
       let sear=document.getElementById('sear')
       let lis=document.querySelectorAll('li:not(:first-child)')
       sear.className="active"
       lis[0].className=""
     }     
    },
    mounted(){
       let lis=document.querySelectorAll('li:not(:first-child)')
       lis.forEach((li,index,lis)=>{
         li.className=""
       })
       lis[0].className="active"
    }
  }
</script>
<style  scoped>
.top{
  background-color: #F7F7F7;
  position: fixed;
  z-index: 666;
  top:0px;
}
.top-title{
  margin-top: 10px;
  text-align: center;
}
.search{
  width: 16px;
  height: 16px;
  vertical-align: middle;
}
.middle{
  font-size: 14px;
  display: flex;
  color: #878787;
  height:50px;
  margin-left: 20px;
}
.new{
  margin-left: 50px;
}
.nav-left{
  float: left;
  padding: 0;
  width: 80px;
  margin: 0px;
  position: fixed;
  bottom: 55px;
}
.nav-left>ul{
  padding-left: 10px;
  
}
.font_small{
  color: #878787;
  font-size: 13px;
  font-weight: bold;
}
 li{
  height: 67.5px;
  background-color: #F7F7F7;
}
.address{
  display: flex;
  padding: 10px;
  border-bottom: 2px solid rgb(0,0,0,0.1);
}
.address>p{
  width: 300px;
}
.my-button{
  background: #EAB488;
  color: #fff;
  text-align: center;
  font-size: 12px;
  border-radius: 20px;
  width: 50px;
  height: 30px;
  line-height: 30px;
}
.active{
  background-color: #fff;
}
.right-desc{
  width: 275px;
  margin-left: 90px;
  margin-top: 50px;

}
.right-desc img{
 width: 100px;
 height: 100px;
 margin-right: 10px;
}
.cat{
  margin:30px;
}
.right-desc .desc{
  display: flex;
}
.desc-title{
  font-weight: bolder;
}
.desc-desc{
  font-size: 12px;
  color: #999;
}
.desc-button{
  background: #EAB488;
  color: #fff;
  text-align: center;
  font-size: 12px;
  border-radius: 20px;
  width: 60px;
  height: 25px;
  line-height: 25px;
  margin-left: 43px;
}
.dec-price{
  font-size: 16px;
}
.desc-type{
  text-align: center;
  margin: 10px 0px 20px 0;
}
.desc-type>span{
  border: 1px solid #000;
  border-radius: 5px;
  font-size: 12px;
  padding: 2px;
}
</style>

