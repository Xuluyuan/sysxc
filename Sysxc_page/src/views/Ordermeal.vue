<template>
  <div class="ordermeal">
    <!-- 顶部 -->
    <div class="top">
      <div class="address">
        <p><span style="font-weight:bolder">2786书亦烧仙草深圳龙华星光城店 ><br> </span><span>约6.9km  </span><span style="font-size:12px;color:#999">广东省深圳市龙华区街道清泉路9号</span></p>
        <div><mt-button size="small" class="my-button">到店</mt-button></div>
      </div>
    </div>
    <!-- 左侧选项卡 -->
		<ul class="list-unstyled text-center nav-left " >
      <div id="sear" class="sear_active">
        <router-link  to="/search">
        <img src="../assets/images/search.png">
				<p class="font_small">搜索</p>
        </router-link>
      </div>
			<li  v-for='(desc,index) of descs' :key="index" @click="change($event,index)" data-i=index>
				<img :src=desc.img >
				<p class="font_small">{{desc.d}}</p>
			</li>
		</ul>
    <!-- 右侧商品详情 -->
   <div class="right-desc">
     <div class="cat">新品上线</div>
     <div v-for="(drink,index) of drinkList" :key="index">
       <div class="desc" @click="check($event,index)">
          <img :src=drink.img alt="" class="spec_img">
          <div class="my_desc">
            <p class="desc-title">{{drink.title}}</p>
            <p class="desc-desc">{{drink.desc}}</p>
            <span class="dec-price">￥{{drink.price.toFixed(2)}}</span>
            <mt-button size="small" class="desc-button">选口味</mt-button>
            <!-- 选口味上面的数量 -->
            <span id="sel_num" :data-sum=index class="sum" v-show="btn_count[index]>0">{{btn_count[index]}}</span>
            <!-- 详情页 -->
            <my-details :drinkList="drinkList" :index="index" :check="check" :spec_title="spec_title" :desc_desc="desc_desc" :desc_type="desc_type" :spec_img="spec_img" :spec_price=" spec_price" :drink="drink" :btn_index="btn_index"  ></my-details>
        </div>
      </div>
      <div class="desc-type"><span>{{drink.type}}</span></div>
    </div>
  </div>
  <!-- 购物车组件 -->
  <my-cart :drinkList="drinkList"></my-cart>
  <!-- 底部选项卡 -->
  <my-bottom></my-bottom>
  <!-- 选规格页面 -->
  <div class="mask" v-show="this.$store.state.mask==true"></div>
</div>
</template>
<script>
import myCart from '../components/Cart'
import myBottom from '../components/Bottom'
import myDetails from '../components/Details'
import $ from 'jquery'
export default {
   components:{myBottom,myCart,myDetails},
  data(){
    return{
      descs:[
        {d:'新品上线',img:require('../assets/images/new.png'),did:1},
        {d:'烧仙草系列',img:require('../assets/images/xiancai.png'),did:2},
        {d:'酸奶&益菌多系',img:require('../assets/images/suannai.png'),did:3},
        {d:'鲜果奶茶系',img:require('../assets/images/xianguo.png'),did:4},
        {d:'特调奶茶系',img:require('../assets/images/tediaonaicha.png'),did:5},
        {d:'推荐小料',img:require('../assets/images/xiaoliao.png'),did:6},
        {d:'温馨提示',img:require('../assets/images/wenxintishi.png'),did:7},
      ],
     drinkList: [
            {did:1,img:'/naicha/nc1.jpg',title:'草莓啵啵酸奶',desc:'清爽的草莓搭配醇香茉莉酸奶，口感饱满，滋味酸甜',price:15.00,type:'啵啵奶茶'},
            {did:2,img:'/naicha/nc2.jpg',title:'酸奶冰奶茶',desc:'清凉鲜爽的葡萄沙拌上醇香的茉莉酸奶，Q弹啵啵',price:17.00,type:'酸甜奶茶'},
            {did:3,img:'/naicha/nc4.png',title:'元气桃桃',desc:'元气森林气泡水搭配饱满蜜桃，清凉爽口，元气无线',price:18.00,type:'元气新品'},
            {did:4,img:'/naicha/nc5.jpg',title:'椰椰烧仙草',desc:'天然椰椰搭配嫩滑仙草，满口阳光暖暖的味道',price:19.00,type:'椰椰新品'},
            {did:5,img:'/naicha/nc6.jpg',title:'书亦烧仙草',desc:'红豆、珍珠、椰果、葡萄干、花生、仙草+奶茶',price:20.00,type:'仙草系列'},
            {did:6,img:'/naicha/nc7.jpg',title:'杨枝甘露烧仙草' ,desc:'甘甜芒果青涩西柚，经典杨枝甘露',price:21.00,type:'清凉一夏'}
          ],
      spec_title:"",
      desc_desc:"",
      desc_type:"",
      spec_img:"",
      spec_price:"",
      btn_index:0,
      btn_count:this.$store.state.btn_count,
    }
  },
  methods:{
    // 根据产品分类导航栏传参来过滤想要的数据
     change(e,i){
       //实现点击分类导航栏，实现选中的页面的标题为对应的选中的导航栏的标题
      let cat=document.getElementsByClassName('cat')[0]
      if(e.target.nodeName=="IMG"){
       cat.innerHTML= e.target.nextElementSibling.textContent
      }else{
        cat.innerHTML=e.target.textContent
      }
       //当切换左侧导航栏时，根据传过来的index值和for循环得到的n值对比。如果相等时就让该li高亮显示，其他的li的样式都修改为默认样式
      let lis=document.querySelectorAll('li:not(:first-child)')
      let sear=document.getElementById('sear')
       for(let n=0;n<this.descs.length;n++){
         if(i!=n){
           sear.style.background="#F5F5F5"
           lis[n].className=""
         }else{
           sear.style.background="#F5F5F5"
           lis[n].className="active"
         }
       }
     },
      check(e,i){
        //利用事件委托
        //根据v-for 的index下标来获取详情页面数据
        if(e.target.className=='desc-title' || e.target.className=='mint-button desc-button mint-button--default mint-button--small' || e.target.className=='desc-desc' || e.target.className=="spec_img"){
          this.spec_img=this.drinkList[i].img
          this.spec_title=this.drinkList[i].title
          this.desc_desc=this.drinkList[i].desc
          this.desc_type=this.drinkList[i].type
          this.spec_price=this.drinkList[i].price.toFixed(2)
          this.btn_index=i; 
          //点击查看详情的时候弹出详情层页面
          this.$store.commit("changeSpecShow",true)
          this.$store.commit("changeMask",true)
        }
     },
  },
  mounted(){
    //后面此处需要发送ajax请求，首次初始化页面

    //初始化情况下，左侧导航栏默认选择第一个。使其初始话颜色高亮显示
    let lis=document.getElementsByTagName('li');
    lis[0].className="active";
  },
  computed:{
   
  },
}

</script>
<style  scoped>
.ordermeal #sear{
  width: 80px;
  height: 67.5px;
}
.ordermeal .mask{
  width: 375.5px;
  height: 100%;
  position: fixed;
  z-index: 0;
  background-color:rgb(0,0,0,0.3);
  top:0px;
  left: 0px;
}
.ordermeal .top{
  background-color: #F7F7F7;
  position: fixed;
  z-index: 444;
  top:0px;
}
.ordermeal .top-title{
  margin-top: 10px;
  text-align: center;
}
.ordermeal .search{
  width: 16px;
  height: 16px;
  vertical-align: middle;
}
.ordermeal .middle{
  font-size: 14px;
  display: flex;
  color: #878787;
  height:50px;
  margin-left: 20px;
}
.ordermeal .new{
  margin-left: 50px;
}
.ordermeal .nav-left{
  float: left;
  padding: 0;
  width: 80px;
  margin: 0px;
  position: fixed;
  bottom: 55px;
}
.ordermeal .nav-left>ul{
  padding-left: 10px;
  
}
.ordermeal .font_small{
  color: #878787;
  font-size: 13px;
  font-weight: bold;
}
.ordermeal li{
  height: 67.5px;
  background-color:#F5F5F5;
}
.ordermeal .address{
  display: flex;
  padding: 10px;
  border-bottom: 2px solid rgb(0,0,0,0.1);
}
.ordermeal .address>p{
  width: 300px;
}
.ordermeal .my-button{
  background: #EAB488;
  color: #fff;
  text-align: center;
  font-size: 12px;
  border-radius: 20px;
  width: 50px;
  height: 30px;
  line-height: 30px;
}
.ordermeal .active{
  background-color:#fff;
}
.ordermeal  .sear_active{
    background-color:#F5F5F5;
}
.ordermeal .right-desc{
  width: 275px;
  margin-left: 90px;
  margin-top: 83px;

}
.ordermeal .desc>img{
 width: 100px;
 height: 100px;
 margin-right: 10px;
}
.ordermeal .cat{
  margin:30px;
}
.ordermeal .right-desc .desc{
  display: flex;
}
.ordermeal .desc-title{
  font-weight: bolder;
}
.ordermeal .desc-desc{
  font-size: 12px;
  color: #999;
  
}
.ordermeal .desc-button{
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
.ordermeal .dec-price{
  font-size: 16px;
}
.ordermeal .desc-type{
  text-align: center;
  margin: 10px 0px 20px 110px;
  border: 1px solid #999;
  width: 60px;
  font-size: 13px;
  border-radius: 5px;
}

.ordermeal .my_desc{
  position: relative;
}
.ordermeal #sel_num{
  display:inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid #ccc;
  text-align: center;
  background-color: red;
  color: #fff;
  font-size: 12px;
  line-height: 15px;
  position: absolute;
  top: 68px;
  left: 143px;
  /* display: none; */
}
</style>



