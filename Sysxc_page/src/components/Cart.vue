<template>
<div class="foot" id="cart"  v-show="totalPrice>0">
    <div class="left_cart" @click="cartDetails">
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
            <li class="drink" v-for="(drink,dindex) of drinks" :key="dindex" v-show="$store.state.btn_count[drink.index]>0">
                <cart-control :btn_index="drink.index" :drinks="drinks" ></cart-control>
                <span class="title">{{drink.title}}</span>
                <span class="count">×{{$store.state.btn_count[drink.index]}}</span>
                <span class="price">￥{{drink.price*$store.state.btn_count[drink.index]}}</span>
                <p class="details">{{drink.details}}</p>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
import cartControl from "./Cartcontrol"
export default {
    components:{cartControl},
    data(){
        return{
           drinks:[],
        }
    },
    props:['drinkList'],

    //使用计算属性 计算总价和购买数量
    computed:{
        //遍历饮料列表，得到对应的饮料的价格.数量通过vuex中的初始化数量加上遍历得到的下标值取到
        totalPrice(){
            let totalPrice = 0
            this.drinkList.forEach((drink,i) => {
                    totalPrice +=drink.price*this.$store.state.btn_count[i];
                
            });
            return totalPrice;
        },
        totalCount(){
            let totalCount=0; 
            this.drinkList.forEach((drink,i) => {
                     totalCount +=this.$store.state.btn_count[i];
            });
             ;
            return totalCount;
        },
    },
    watch:{
        totalPrice(){
            if(this.totalPrice==0){

                this.$store.commit("changeMask",false)
            }
        }
    },
    methods:{
        jumpPay(){
         
        },
        cartDetails(){
       
            //将数量大于1的产品的数量、价格、标题、客户所选规格加入到data中的drinks数组中。
            let drinks=[];
            let $numEles=$('.sum');
            $numEles.each((nindex,numEle)=>{
                let $numEle=$(numEle)
                if(parseInt($numEle.html())>0 ){
                    let pri=$numEle.siblings('.dec-price').text();
                    let price=pri.slice(1);
                    let $descTitle=$numEle.siblings('.desc-title');
                    let text=$descTitle.html();
                    let details1=document.getElementById('p').innerHTML.slice(3)
                    let details2=document.getElementById('label').innerHTML.slice(3)
                    let details=details1+"/"+details2
                    drinks.push({count:parseInt($numEle.html()),title:text,price:price,details:details,index:nindex});
                };
            });
            //获取防护层div和购物车列表div
            if(this.$store.state.mask==false && this.$store.state.cartListShow==false && this.drinks.length>0){
                this.$store.commit("changeCartList",true)
                this.$store.commit("changeMask",true)
            }else{
                this.$store.commit("changeCartList",false)
                this.$store.commit("changeMask",false)
            }
            this.drinks=drinks
            return this.drinks;
        },
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
        border-bottom: 1px solid#F0F0F0;
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
       margin-top: 5px;
       color: #EAB488;
       font-size: 16px;
    }
</style>
