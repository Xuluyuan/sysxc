<template>
  <div class="details" v-show="this.$store.state.specShow==true">
            <div class="spec"  >
            <span @click="close" >×</span>
            <img :src=spec_img class="spec_img">
            <div class="my-spec">
              <p class="desc-title1">{{spec_title.title}}</p>
              <p class="desc-desc1" style="margin-top:-15px">{{desc_desc}}</p>
              <p class="desc-type1" v-show="desc_type!=''">{{desc_type}}</p>
              <div class="req">
                <div class="temp" @click="choicTemp($event,btn_index)" v-if="indicator !==6" v-show="indicator !==5">
                <!-- <div class="temp"> -->
                  <p>温度</p>
                  <button>冰</button>
                  <button style="margin-left:15px;margin-bottom:10px">不能调整温度</button>
                </div>
                <div class="tian" @click="choicTian($event,btn_index)" v-if="indicator !==6" v-show="indicator !==5">
                <!-- <div class="tian"> -->
                  <p >甜度</p>
                  <button >常规糖</button>
                  <button style="margin-left:15px">少糖7分糖</button>
                </div>
              </div>
              <hr style="margin-top:10px;margin-bottom:10px">
              <div class="num" v-if="indicator !==6">
                <label>￥{{spec_price}}</label>
                <cart-control :drinks="drinks"  :drink="drink"  :btn_index="btn_index" :drink-list="drinkList" :indicator="indicator" ></cart-control>
              </div>
              <p class="hasSelected" id="p">{{temp}}</p>
              <label class="hasSelected" id="label">{{tian}}</label>
              <div class="spec_bottom" v-if="indicator !==6">
                <button @click="commit(btn_index)">选好了</button>
              </div>
            </div>
          </div>
  </div>
</template>
<script>
import cartControl from "./Cartcontrol"
export default {
  components:{cartControl},
  props:["drinks", "drinkList","index","check","spec_title", "desc_desc","desc_type","spec_img","spec_price","drink","selectdrinks" ,"btn_index","indicator"],
  data(){
    return{
      temp:"",
      tian:""
    }
  },
   methods:{
     //规格选择
     choicTemp(e,btn_index){
      //  console.log(btn_index)
       if(e.target.nodeName=="BUTTON"){
        if(e.target.className==""){
           let selected=document.getElementById('p')
          e.target.className="spec_active";
          e.target.previousElementSibling.className=""
            if(e.target.nextElementSibling!=null){
               e.target.nextElementSibling.className=""
            }
            if(e.target.classList.contains( 'spec_active' )){
            this.temp='已选:'+e.target.innerHTML
           }
        }
       }
     },
      choicTian(e,btn_index){
       if(e.target.nodeName=="BUTTON"){
        if(e.target.className==""){
          let selected=document.getElementById('label')
          e.target.className="spec_active";
          e.target.previousElementSibling.className=""
            if(e.target.nextElementSibling!=null){
               e.target.nextElementSibling.className=""
            }
            if(e.target.classList.contains( 'spec_active' )){
            this.tian='已选:'+e.target.innerHTML
           }
        }
       }
     },
     //点击详情页面的关闭按钮时,隐藏详情页面
     close(){
      let selected1=document.getElementById('p')
      let selected=document.getElementById('label')
      this.$store.commit("changeMask",false);
      this.$store.commit("changeSpecShow",false)
      selected1.innerHTML=""
      selected.innerHTML=""
     },
     //点击选好了按钮，完成如下功能
     commit(i){
      let btns=document.querySelectorAll('.temp button');
      let btn1s=document.querySelectorAll('.tian button');
      let arr=[...btns,...btn1s];
      // console.log(arr)
      //初始化变量，记录没有选择规格的按钮数量
      let c=0;
      arr.forEach((btn)=>{
        if(btn.className==""){
          c++;
        }
        return c;
      });
      //总共有24个按钮
      if(c>56){
        this.$messagebox("温馨提示","请选择规格")
      }else{
          this.$store.commit("changeSpecShow",false)
          this.$store.commit("changeMask",false)
        } 
      }
    },
    mounted(){
     
    },
}
</script>
<style  scoped>
.spec .spec_img{
  width: 100%;
}
.spec{
  width: 320px;
  height: 500px;
  background: #fff;
  position: fixed;
  left: 28px;
  top:86px;
  z-index: 666;
  /* display: none; */
  
}
.spec span{
  display: inline-block;
  float: right;
  font-size: 30px;
  width: 40px;
  height: 40px;
  border:1px solid rgb(179, 170, 170) ;
  text-align: center;
  margin-top:10px;
  margin-right: 10px;
  border-radius: 50%;
  position: absolute;
  right: 0px;
  color: #999;
}

.my-spec{
  padding: 15px;
}
.desc-title1{
  font-weight: border;
  margin-top: 5px;
}
.desc-desc1{
  font-size: 12px;
  color: #999;
}
.desc-type1{
  text-align: center;
  width: 80px;
  font-size: 12px;
  color: rgb(0,0,0,0.6);
  background-color:rgb(0,0,0,0.1);
  border-radius: 3px;
  padding: 2px;
}
.req button{
  width: 100px;
  /* background-color: #EAB488;
  color: #fff; */
  border-radius: 3px;
  font-size: 13px;
  padding: 3px;
  border: 1px solid #ccc;
}
.spec_active{
  background-color: #EAB488;
  color: #fff;
  border: 0 none;
  outline: none;
}
.hasSelected{
  color: #999;
  font-size: 13px;
  margin: 0;
}
#label{
display: inline;
 max-width: 100%;
 margin-bottom: 0px;
 font-weight: normal;
}
.spec_bottom>button{
  border:none;
  background-color: #EAB488;
  color: #fff;
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  margin-top: 5px;
}
</style>