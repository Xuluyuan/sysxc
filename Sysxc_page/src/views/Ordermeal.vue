<template>
  <div class="ordermeal">
    <!-- 顶部 -->
    <div class="top">
      <div class="address">
        <p><span style="font-weight:bolder">2786书亦烧仙草深圳龙华星光城店 ><br> </span><span style="font-size:12px;color:#999" id="address">{{address}}</span></p>
        <div><mt-button size="small" class="my-button" @click="map">到店</mt-button></div>
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
			<li  v-for='(desc,index) of descs' :key="index" @click="change($event,index)" >
				<img :src=desc.class_pic >
				<p class="font_small">{{desc.class_name}}</p>
			</li>
		</ul>
    <!-- 右侧商品详情 -->
   <div class="right-desc">
     <div class="cat">新品上线</div>
     <div v-for="(drink,index) of $store.state.drinkList[$store.state.indicator]" :key="index">
       <div class="desc" @click="check($event,index)">
          <!-- <img :src="`../../public/img/${drink.class_pic}`"  alt="" class="spec_img"> -->
           <img :src=drink.product_pic  alt="" class="spec_img">
          <div class="my_desc">
            <p class="desc-title">{{drink.product_name}}</p>
            <p class="desc-desc">{{drink.product_describe}}</p>
            <span class="dec-price">￥{{drink.product_price.toFixed(2)}}</span>
            <mt-button size="small" class="desc-button" v-if="$store.state.indicator !==6" >选口味</mt-button>
            <!-- 选口味上面的数量 -->
            <span id="sel_num" class="sum" v-show="$store.state.btn_count[$store.state.indicator][index]>0">{{$store.state.btn_count[$store.state.indicator][index]}}</span>
            <!-- <span id="sel_num" class="sum"></span> -->
            <!-- 详情页 -->
            <my-details  :index="index" :check="check" :spec_title="spec_title" :desc_desc="desc_desc" :desc_type="desc_type" :spec_img="spec_img" :spec_price=" spec_price" :drink="drink" :btn_index="btn_index" ></my-details>
        </div>
      </div>
      <div style="margin:10px 0 10px 0; height:30px">
        <div class="desc-type"  v-if="drink.product_labelname!=''"><span>{{drink.product_labelname}}</span></div>
      </div>
      
    </div>
  </div>
  <!-- 购物车组件 -->
  <my-cart :btn_index="btn_index"></my-cart>
  <!-- 底部选项卡 -->
  <my-bottom></my-bottom>
  <!-- 选规格页面 -->
  <div class="mask" v-show="$store.state.mask==true"></div>
</div>
</template>

<script>
import {MP} from '../map.js'
import myCart from '../components/Cart'
import myBottom from '../components/Bottom'
import myDetails from '../components/Details'
import $ from 'jquery'
export default {
   components:{myBottom,myCart,myDetails},
  data(){
    return{
      descs:[],
      spec_title:"",
      desc_desc:"",
      desc_type:"",
      spec_img:"",
      spec_price:0,
      btn_index:0,
      // btn_count:this.$store.state.btn_count[this.btn_index],
      getCount:[],
     address:sessionStorage.getItem("address")
    }
  },
  methods:{
    // 根据产品分类导航栏传参来过滤想要的数据
     change(e,i){
        this.$store.commit("changeSideId",i)
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
       };
     },
      check(e,i){
        //利用事件委托
        //根据v-for 的index下标来获取详情页面数据
        if(e.target.className=='desc-title' || e.target.className=='mint-button desc-button mint-button--default mint-button--small' || e.target.className=='desc-desc' || e.target.className=="spec_img"){
          this.spec_img=this.$store.state.drinkList[this.$store.state.indicator][i].product_pic
          this.spec_title=this.$store.state.drinkList[this.$store.state.indicator][i].product_name
          this.desc_desc=this.$store.state.drinkList[this.$store.state.indicator][i].product_describe
          this.desc_type=this.$store.state.drinkList[this.$store.state.indicator][i].product_labelname
          this.spec_price=this.$store.state.drinkList[this.$store.state.indicator][i].product_price.toFixed(2)
          this.btn_index=i; 
          //点击查看详情的时候弹出详情层页面
          this.$store.commit("changeSpecShow",true)
          this.$store.commit("changeMask",true)
        }
     },
     map(){
       this.$router.push("/map")
     }
  },

  mounted(){
    //此处需要发送ajax请求，首次初始化页面左侧导航栏
    this.axios.get("/category").then(res=>{
      let data=res.data.results;
      data.forEach(ele=>{
        ele.class_pic=require(`../assets/images/${ele.class_pic}`)
      })
      this.descs=data
    })
   
    //初始化情况下发送请求，默认显示第一个类别下的商品第一页的商品
    this.axios.get("/lists"
    ).then(res=>{
      let drink=[]
      let drink2=[]
      let drink3=[]
      let drink4=[]
      let drink5=[]
      let drink6=[]
      let drink7=[]
      let arr=res.data.result;
      arr.forEach((ele,index,arr)=>{
        if(ele.product_id==1){
          ele.product_pic=require(`../assets/images/${ele.product_pic}`)
          drink.push(ele)
        }
        if(ele.product_id==2){
          ele.product_pic=require(`../assets/images/${ele.product_pic}`)
           drink2.push(ele)
        }
        if(ele.product_id==3){
          ele.product_pic=require(`../assets/images/${ele.product_pic}`)
           drink3.push(ele)
        }
        if(ele.product_id==4){
          ele.product_pic=require(`../assets/images/${ele.product_pic}`)
           drink4.push(ele)
        }
        if(ele.product_id==5){
          ele.product_pic=require(`../assets/images/${ele.product_pic}`)
           drink5.push(ele)
        }
        if(ele.product_id==6){
          ele.product_pic=require(`../assets/images/${ele.product_pic}`)
           drink6.push(ele)
        }
        if(ele.product_id==7){
          ele.product_pic=require(`../assets/images/${ele.product_pic}`)
           drink7.push(ele)
        }
      })
      let obj={
        drink:drink,
        drink2:drink2,
        drink3:drink3,
        drink4:drink4,
        drink5:drink5,
        drink6:drink6,
        drink7:drink7
      }
     
      this.$store.commit("getDrinkList",obj)
    })

    //初始化情况下，左侧导航栏默认选择第一个。使其初始话颜色高亮显示
    let liEle=document.getElementsByTagName("li")
    window.setTimeout(()=>{
      liEle[0].className="active"
    },500)

     this.$nextTick(() => {
      const _this = this
      MP(_this.ak).then(BMap => {
        // _this.initMap()
      })
    });
     let geo=navigator.geolocation;
    //调用getCurrentPosition()方法
    geo.getCurrentPosition(
      (position)=>{
        //获取GeolocationPositionCoordinates对象
        let coords=position.coords;
        //获取经度
        let longitude=coords.longitude;
        //获取纬度
        let latitude = coords.latitude;
        //创建地图实例
        let map = new BMap.Map('container');
        //创建地图点坐标对象 -- Point对象
        // let point = new BMap.Point(longitude,latitude);
        let point=new BMap.Point(114.045556,22.628732)   
        //反地址解析
        let geocoder=new BMap.Geocoder()
        geocoder.getLocation(point,(result)=>{
          // document.getElementById('address').innerHTML=result.address
          sessionStorage.setItem("address",result.address)
          console.log(this.$store.state.address)
        })
      },
    )
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
  font-size: 12.5px;
  font-weight: 500;
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
 height: 80px;
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
  margin-left: 30px;
}
.ordermeal .dec-price{
  font-size: 16px;
  display: inline-block;
  width: 70px;
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
  overflow: hidden;
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
  top: 50px;
  left: 143px;

  /* display: none; */
}
</style>



