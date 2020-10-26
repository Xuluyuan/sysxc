<template>
  <div class="takeMeal" >
      
       <mt-header class="top" title="请凭如下凭证取餐" >
        <button slot="left" class="back" @click="back">返回</button>
       </mt-header>
       <div  v-if="this.$store.state.orderId==null">
        <img src="../assets/images/shibai.gif" alt="" class="failImg">
        <p class="failText">您还有没有下单哟...</p>
       </div>
      <div v-else >
        <div class="container" style="padding-top:20px" >
        <table></table>
        <div class="getTicket">
            <div>
                <p>下单时间{{time}}</p>
                <p>取餐码：{{$store.state.orderId}}</p>
                <p>验证码：2015 0802 3698 1117</p>
                <img src="../assets/images/ewm.png" alt="" class="orderMa" >
            </div>
            <div class="circleLeft"></div>
            <div class="circleRight"></div>   
        </div>
        <div class="others">
            <div class="price">
                <div>
                    <h4>实付金额</h4>
                    <span>{{getTotal}}元</span>
                    <p>订单号：{{$store.state.orderId}}</p>
                    <p>购买数量：{{getCount}}份</p>
                    <p>用户：{{username}}</p>
                    <p>商家：书亦烧仙草</p>
                </div> 
            </div>
            <div class="notice">
                <div>
                    <h4>购买须知</h4>
                    <p>购买时请选好商品，一经售出，概不退换</p>
                </div>
            </div>
        </div>
    </div>    
</div>
   <my-bottom></my-bottom>
  </div>
</template>
<script>
import myBottom from '../components/Bottom'
export default {
  components:{myBottom},
  computed:{
    getCount(){
      let count=0
      this.lists.forEach((list,index)=>{
        count+=list.order_product_count
      })
      return count;
    },
    getTotal(){
      let total=2
      this.lists.forEach((list,index)=>{
        total+=list.order_product_total
      })
      return total;
    }
  },
  data(){
    return{
      lists:[],
      succse:false,
      time:new Date().toLocaleString(),
      username:sessionStorage.getItem("username")
    }
  },
  mounted(){
    let id=sessionStorage.getItem("orderId")
    this.axios.get("/getOrder",{
      params:{pid:id}
    }).then(res=>{
      //等会追加
      this.$store.commit("setMa",id)
      let data=res.data.result
      data.forEach(ele => {
        let img= ele.order_product_pic.slice(0,13)+'.jpg'
         ele.order_product_pic=require(`../assets/images/${img}`)
      });
      this.lists=data
    })
     
  },
  methods:{
    back(){
      this.$router.push("/ordermeal")
       this.$store.commit("changeBarId",'orderMeal')
    }
  }
}
</script>

<style scoped>
.takeMeal .failImg{
  width: 150px;
  height: 150px;
  margin-left: 120px;
  margin-top: 100px;
}
.takeMeal .failText{
  font-size: 20px ;
  color: rgb(138, 132, 132);
  text-align: center;
}
.takeMeal .orderlist{
  margin: 10px;
}
.takeMeal .back{
        border: 0 none;
        background: none;
        color: #fff;
    }
.takeMeal .orderImg{
  width: 150px;
  height: 90px;
}
.takeMeal .orderMa{
  width: 150px;
  margin: 10px;
}
.takeMeal   .mint-header{
    background-color: #EAB488;
  }
 
a:focus, a:hover {
    color: #23527c;
    text-decoration:none;
    text-decoration-line:none;
    text-decoration-style: initial;
    text-decoration-color: initial;
}


</style>
<style scoped>
 .mint-header-title {
    margin-top: 14px; 
  }
 .mintui-back:before {
    font-size: 16px;
    color: #fff !important;
    font-weight: 700;
 }
    .container{
       background:#e5e5e5;
       height:100%;
    }
    .circleLeft{
        position:absolute;
        left:0;
        bottom:-0.8rem;
        width:0.8rem;
        height:1.6rem;
        display: inline-block;
        background-color:#e5e5e5;
        border-top-right-radius: 0.8rem;
        border-bottom-right-radius: 0.8rem;
        z-index:199;
        padding:0 !important;
    }
    .circleRight{
        position:absolute;
        right:0;
        bottom:-0.8rem;
        width:0.8rem;
        height:1.6rem;
        display: inline-block;
        background-color:#e5e5e5;
        border-top-left-radius: 0.8rem;
        border-bottom-left-radius: 0.8rem;
        z-index:199;
        padding:0 !important;
    }


    .container>.detail{
        margin:0 auto;
        margin-top: 4.60rem;
        width:90%;
        background:#fff;
        border-bottom:1px dotted #888;
        position: relative;
        border-top-left-radius:1rem;
        border-top-right-radius:1rem;
    }

    .container>.detail>div{
        padding:1.66rem;
        letter-spacing: 0.0417rem;
    }
    .container>.detail>div>h4{
        font-size:1.4rem;
        font-weight: 600;
        margin-bottom:1rem;
        color:#000;
    }
    .container>.detail>div>p{
        font-size:1rem;
        margin-bottom:0.8rem;
        color:#000;
    }
    .container>.detail>div>.seat{
        font-size:1rem;
        margin-bottom:0.8rem;
        color:#888;
    }


    .container>.getTicket{
        margin:0 auto;
        width:90%;
        background:#fff;
        border-bottom:1px dotted #888; 
        position:relative;
    }
    .container>.getTicket>div{
        padding:1.66rem;
        color:#000;
    }
    .container>.getTicket>div>p{
        font-size:1rem;
        letter-spacing: 0.0417rem;
        margin-bottom:0.8rem;
    }
    .container>.getTicket>div>img{
        display:block;
        margin:1.66rem auto;
        width:14.94rem;
        height:14.94rem;
        border-radius: 0.415rem;
    }
/*4:其它详情界面*/  
    .container>.others{
        margin:0 auto;
        width:90%;
        background:#fff;
        margin-bottom:1.4rem;
        border-bottom-left-radius:1rem;
        border-bottom-right-radius:1rem;
    }

      .container>.others>.hall{
        padding:1.66rem;
        display:flex;
        /* justify-content: space-around; */
        align-items:center;
        border-bottom:1px dotted #888; 
        position: relative;
        
    }
     .container>.others>.hall>div>h4{
        font-size:1.2rem;
        font-weight:600;
        color:#000;
        letter-spacing: 0.0417rem;
        margin-bottom:0.8rem;

    }
     .container>.others>.hall>div>p{
        font-size:1rem;
        line-height:1.6rem;
        color: #888;
        letter-spacing: 0.0417rem;
        margin-bottom:0.8rem;
    }
    .container>.others>.hall>img{
        margin-left:0.8rem;
        display:inline-block;
        width:2rem;
        height:2rem;
    }

     .container>.others>.price{
        padding:1.66rem;
        border-bottom:1px dotted #888; 
    }
      .container>.others>.price>div>h4{
        display:inline-block;
        font-size:1.2rem;
        font-weight:600;
        letter-spacing: 0.0417rem;
        margin-bottom:0.83rem;
        color:#000;
    }
     .container>.others>.price>div>span{
        display:inline-block;
        font-weight:600;
        margin-left:55%;
        font-size:1.4rem;
        letter-spacing: 0.0417rem;
        margin-bottom:0.8rem;
    }
     .container>.others>.price>div>p{
        font-size:1rem;
        line-height:1.6rem;
        color: #888;
        letter-spacing: 0.0417rem;
        margin-bottom:0.2rem;
    }

     .container>.others>.notice{
        padding:1.66rem;
    }
      .container>.others>.notice>div>h4{
        display:inline-block;
        font-size:1.2rem;
        font-weight:600;
        letter-spacing: 0.0417rem;
        margin-bottom:0.8rem;
    }
     .container>.others>.notice>div>p{
        font-size:1rem;
        line-height:1.6rem;
        color: #888;
        letter-spacing: 0.0417rem;
        margin-bottom:0.2rem;
    }

</style>