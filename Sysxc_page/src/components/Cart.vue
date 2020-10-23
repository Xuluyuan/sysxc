<template>
<div class="foot" id="cart" v-show="totalCount>0" >

        <div class="left_cart" @click="cartDetails()">
            <img src="../assets/images/cart.png" alt="">
            <span class="foot_sum">合计￥{{totalPrice}}元</span>
            <p class="num">{{totalCount}}</p>
            <span class="deliveryPrice">另需派送费:￥2元</span>
        </div>
        <button class="right_cart" @click="jumpPay">去结算</button>
        <div class="cartList" v-show="this.$store.state.cartListShow==true">
            <p class="cartList_top">
                <span class="selected">已选中的商品</span>
                <span class="clear" @click="clear">清空购物车</span>
            </p>
            <ul class="list_content"  >
                <li class="drink" v-for="(drink,dindex) of this.$store.state.btn_count" :key="dindex" >
                    <div v-for="(d,i) of $store.state.drinkList[dindex]" :key="i" class="list" v-show="$store.state.btn_count[dindex][i]>0">
                        <div class="listcartCount">
                            <button @click="minus(dindex,i)"  class="minus">-</button>
                            <label class="cart-count">{{$store.state.btn_count[dindex][i]}}</label>
                            <button @click="add(dindex,i)" class="add">+</button>
                        </div>
                        <span class="title">{{d.product_name}}</span>
                        <span class="count">×{{$store.state.btn_count[dindex][i]}}</span>
                        <span class="price">￥{{d.product_price}}</span>
                    </div>
                </li>
            </ul>
        </div>

</div>
</template>
<script>
import cartControl from "./Cartcontrol"
import { MessageBox } from 'mint-ui'
export default {
    components:{cartControl},
    data(){
        return{
        }
    },
    props:["indicator","btn_index"],
    mounted(){
       console.log()
    },
    //使用计算属性 计算总价和购买数量
    computed:{
        //遍历饮料列表，得到对应的饮料的价格.数量通过vuex中的初始化数量加上遍历得到的下标值取到
        totalCount(){
            let totalCount=0;
            this.$store.state.btn_count.forEach((counts,index)=>{
                counts.forEach((count,index1)=>{
                    if(count>0){
                        totalCount+=count;
                    }
                })
            })
            localStorage.setItem("totalCount",totalCount)
            return totalCount
        },
        totalPrice(){
            let totalPrice=0;
            this.$store.state.btn_count.forEach((counts,index)=>{
                counts.forEach((count,index1)=>{
                    if(count>0){
                        totalPrice+=count*this.$store.state.drinkList[index][index1].product_price
                    }
                })
            })
            localStorage.setItem("totalPrice",totalPrice)
            return totalPrice
        },
        
    },
    watch:{
        //监视总价格的变化。当总价格等于0时，防护罩隐藏。
        totalPrice(){
            this.$nextTick(()=>{
                if(this.totalPrice==0){
                    this.$store.commit("changeMask",false)
                 }
            })
            
        },
        
    },
    methods:{
        //购物车列表中的加减实现
        minus(i1,i2){
            console.log(this.indicator,this.btn_index)
            if(this.$store.state.btn_count[i1][i2]>0){
            this.$store.commit('dec',{
                n1:i1,
                n2:i2,
            })
            }
        },
        add(i1,i2){
            console.log(this.indicator,this.btn_index)
            this.$store.commit('inc',{
            n1:i1,
            n2:i2,
            })
            
        },
        jumpPay(){
            //跳转至支付页面
            //先判断用户是否已经的登录，登录跳转至结算界面，没登陆提示用户登录
            if(localStorage.getItem("isLogined")==1){
                this.$router.push("/settlement")
            }else{
                 MessageBox.confirm("",{
                    title:"提示",
                    message:"请您登录后购买",
                    confirmButtonText:"确定",
                    cancelButtonText:"取消"
                }).then(cation=>{
                    if(cation=="confirm"){
                       this.$store.commit("changeBarId","me")
                       this.$router.push("/login")
                    }
                }).catch(error=>{
                    if(error=="cancel"){
                    }
                })
            }
            
        },
        cartDetails(){
            //获取防护层div和购物车列表div
            if(this.$store.state.mask==false && this.$store.state.cartListShow==false){
                this.$store.commit("changeCartList",true)
                this.$store.commit("changeMask",true)
            }else{
                this.$store.commit("changeCartList",false)
                this.$store.commit("changeMask",false)
            }
        },
        //清除购物车
        clear(){
        this.$store.commit("clearList")
        }
    },
    
}
</script>
<style scoped>
    .foot{
        width:100%;
        display:flex;
        position:fixed;
        bottom:55px;
        left:0rem;
        z-index:333;
        
    }
    .left_cart{
        width:70%;
        text-align:center;
        padding: 10px 0;
        background:#F0F0F0;
        position: relative;
        z-index: 999;
    }

    .left_cart i{
        color:#c63b2d;
        font-size:2.5rem;
        margin-right:0.8333rem;
    }
    .left_cart span{
        color:#C63B2D;
        font-size:1.5rem;
        position:relative;
        top:2px;
    }
    .right_cart{
        color:#fff;
        text-decoration: none;
        font-size:1.6666rem;
        display:block;
        width:30%;
        text-align:center;
        background-color:#EAB488;
        border: 0 none;
    }
    .left_cart .deliveryPrice{
        font-size: 12px;
        color: #999999;
        float: right;
        top:15px;
        right: 10px;
    }
    .foot_sum{
        margin-top: 5px;
    }
    .num{
        position: absolute;
        top: 0px;
        right: 216px;
        width: 24px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        border-radius: 16px;
        font-size: 9px;
        font-weight: 700;
        background-color: red;
        color: #fff;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
    }
    .cartList{
        width: 100%;
        position: absolute;
        bottom: 52px;
        right: 0px;
        z-index: 999;
        background-color: #fff;
    }
    .cartList .clear{
        float: right;
    }
    .list_content .drink{
        list-style:none;
        /* border-bottom: 1px solid#F0F0F0; */
    }
    .list_content{
        padding: 0px 10px 0 10px ;
        max-height: 200px;
        overflow: scroll;
       
    }
    .cartList_top{
      background:#F0F0F0;
      height: 40px;
      line-height: 40px;
     padding: 0 10px 0 10px;
    }
    .cartList_top .clear{
        font-size: 13px;
        color: #999;
    }
    .list_content li+li{
        margin-top: 5px;
    }
    .list_content .details{
        font-size: 13px;
        color: #999;
    }
    .list_content .price{
       float: right;
       margin-right: 20%;
       /* margin-top: 5px; */
       color: #EAB488;
       font-size: 16px;
    }
    .drink .list{
        height: 30px;
        /* line-height: 30px; */
        border-bottom: 1px solid#F0F0F0;
        margin-bottom: 3px;
    }
/* ------- */
.listcartCount label{
   margin:0 10px 0 10px ;
 }
 .listcartCount .minus{
  border: 1px solid #ccc;
}
.listcartCount .add{
  border:none;
  background-color: #EAB488;
  color: #fff;
}
.listcartCount .add:focus,.minus:focus{
  border: 0 none;
  outline: none;
}
.listcartCount button{
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
.listcartCount{
  float: right;
}
</style>
