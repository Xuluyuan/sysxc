<template>
  <div class="map">
    <mt-header>
      <router-link slot="left" to="/ordermeal">返回</router-link>
    </mt-header>
    <div id="container"></div>
    <div id="address">{{address}}</div>
  </div>
</template>
<script>
import {MP} from '../map.js'
export default {
  data(){
    return{
      ak:"",
      address:sessionStorage.getItem("address")
    }
  },
  mounted(){
    this.$nextTick(() => {
      const _this = this
      MP(_this.ak).then(BMap => {
        // _this.initMap()
      })
    })
     //获取地理定位
    //获取Geolocation对象
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
        console.log(point)
        //初始化地图实例
        map.centerAndZoom(point,15);
				//启用拖拽
				map.enableDragging()
				//启用鼠标滚动缩放
        map.enableScrollWheelZoom()   
        
         //创建Size对象,以控制缩放平移控件的距离
        let size = new BMap.Size(20,20);
        //创建NavigationControl(平移缩放)控件
        let nc = new BMap.NavigationControl({
            //设置停靠位置为左上角
            anchor:BMAP_ANCHOR_TOP_RIGHT,
            offset:size,
            //设置类型为平移、缩入及滑块
            type:BMAP_NAVIGATION_CONTROL_LARGE,
        });
        //添加NavigationControl(平移缩放)控件
        map.addControl(nc);
        ///////////////////////////////////////////////////////   
        
        //反地址解析
        let geocoder=new BMap.Geocoder()
        geocoder.getLocation(point,(result)=>{
          // document.getElementById('address').innerHTML=result.address
          sessionStorage.setItem("address",result.address)
          console.log(this.$store.state.address)
        })
      },
      // (error) => {
      //     console.log(error.code);
      //     console.log(code.message);
      // }
    )
  }
}
</script>
<style scoped>
 #container {
      width:375px;
      height: 420px;
      margin: 0 auto;
      border: 1px solid #ccc;
      /* margin-bottom: 20px; */
    }
    #address{
      width: 375px;
      margin: 0 auto;
      border: 1px solid #ccc;
    }
    .map .mint-header{
      background-color: #EAB488;
    }
</style>