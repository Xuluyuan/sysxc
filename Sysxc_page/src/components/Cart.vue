<template>
<!-- <div class="foot" id="cart"> -->
<div class="foot" id="cart"  >
    <!-- v-show="totalCount>0" -->
    <div class="left_cart" @click="cartDetails(indicator)">
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
              <!-- <li class="drink" v-for="(drink,dindex) of drinks" :key="dindex"> -->
            <li class="drink" v-for="(drink,dindex) of drinks" :key="dindex" >
                <div v-for="(d,i) of drink" :key="i" class="list">
                  <!-- <cart-control :drinks="drinks" :indicator="indicator" :btn_index="btn_index" :drinkList="drinkList"></cart-control> -->
                  <cart-control :drink='drink' :btn_index='drink.index' :drinkList='drinkList' :indicator="indicator" :drinks="drinks"></cart-control>
                    <span class="title">{{d.title}}</span>
                    <span class="count">×{{d.count}}</span>
                    <span class="price">￥{{d.price*d.count}}</span>
                    <!-- <p class="details">{{drink.details}}</p> -->  
                </div>
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
           drinks1:[],
           drinks2:[],
           drinks3:[],
           drinks4:[],
           drinks5:[],
           drinks6:[],
           drinks7:[],
           drinks8:[]
        }
    },
    props:['drinkList',"indicator","btn_index"],
    mounted(){
       console.log()
    },
    //使用计算属性 计算总价和购买数量
    computed:{
        //遍历饮料列表，得到对应的饮料的价格.数量通过vuex中的初始化数量加上遍历得到的下标值取到
        totalPrice(){
           let totalPrice=0; 
            this.drinks.forEach((ps,i) => {
                     ps.forEach((p,i1)=>{
                         totalPrice+=p.price*p.count
                     })
            });
            console.log( totalPrice)
            return  totalPrice; 
        },
        totalCount(){
            let totalCount=0; 
            this.drinks.forEach((ds,i) => {
                     ds.forEach((d,i1)=>{
                         totalCount+=d.count
                     })
            });
            console.log(totalCount)
            return totalCount;
        },  
    },
    watch:{
        totalPrice(){
            if(this.totalPrice==0){
                this.$store.commit("changeMask",false)
            }
        },
        
    },
    methods:{
        jumpPay(){
         
        },
        cartDetails(indicator){
            let lis=document.querySelectorAll(".drink")
            console.log(lis)
            //将数量大于1的产品的数量、价格、标题、客户所选规格加入到data中的drinks数组中.
            if(indicator==0){
                let cartDrinkLists1=[];
                this.$store.state.btn_count[indicator].forEach((count,index)=>{
                if(count>0){
                   let price=this.drinkList[indicator][index].product_price
                   let title=this.drinkList[indicator][index].product_name
                   cartDrinkLists1.push({count:count,price:price,title:title,index:index})
                }
                this.drinks1=cartDrinkLists1
                return this.drinks1
                })
             }
             else if(indicator==1){
                  let cartDrinkLists2=[];
                this.$store.state.btn_count[indicator].forEach((count,index)=>{
                if(count>0){
                   let price=this.drinkList[indicator][index].product_price
                   let title=this.drinkList[indicator][index].product_name
                   cartDrinkLists2.push({count:count,price:price,title:title,index:index})
                }
                this.drinks2=cartDrinkLists2
                return this.drinks2
                })
             }else if(indicator==2){
                  let cartDrinkLists3=[];
                this.$store.state.btn_count[indicator].forEach((count,index)=>{
                if(count>0){
                   let price=this.drinkList[indicator][index].product_price
                   let title=this.drinkList[indicator][index].product_name
                   cartDrinkLists3.push({count:count,price:price,title:title,index:index})
                }
                this.drinks3=cartDrinkLists3
                return this.drinks3
                })
             }else if(indicator==3){
                  let cartDrinkLists4=[];
                this.$store.state.btn_count[indicator].forEach((count,index)=>{
                if(count>0){
                   let price=this.drinkList[indicator][index].product_price
                   let title=this.drinkList[indicator][index].product_name
                   cartDrinkLists4.push({count:count,price:price,title:title,index:index})
                }
               this.drinks4=cartDrinkLists4
                return this.drinks4
                })
             }else if(indicator==4){
                  let cartDrinkLists5=[];
                this.$store.state.btn_count[indicator].forEach((count,index)=>{
                if(count>0){
                   let price=this.drinkList[indicator][index].product_price
                   let title=this.drinkList[indicator][index].product_name
                   cartDrinkLists5.push({count:count,price:price,title:title,index:index})
                }
                this.drinks5=cartDrinkLists5
                return this.drinks5
                })
             }else if(indicator==5){
                  let cartDrinkLists6=[];
                this.$store.state.btn_count[indicator].forEach((count,index)=>{
                if(count>0){
                   let price=this.drinkList[indicator][index].product_price
                   let title=this.drinkList[indicator][index].product_name
                   cartDrinkLists6.push({count:count,price:price,title:title,index:index})
                }
               this.drinks6=cartDrinkLists6
                return this.drinks6
                })
             }else if(indicator==6){
                  let cartDrinkLists7=[];
                this.$store.state.btn_count[indicator].forEach((count,index)=>{
                if(count>0){
                   let price=this.drinkList[indicator][index].product_price
                   let title=this.drinkList[indicator][index].product_name
                   cartDrinkLists7.push({count:count,price:price,title:title,index:index})
                }
                this.drinks7=cartDrinkLists7
                return this.drinks7
                })
             }else if(indicator==7){
                  let cartDrinkLists8=[];
                this.$store.state.btn_count[indicator].forEach((count,index)=>{
                if(count>0){
                   let price=this.drinkList[indicator][index].product_price
                   let title=this.drinkList[indicator][index].product_name
                   cartDrinkLists8.push({count:count,price:price,title:title,index:index})
                }
                this.drinks8=cartDrinkLists8
                return this.drinks8
                })
             }
            this.drinks=[this.drinks1,this.drinks2,this.drinks3,this.drinks4,this.drinks5,this.drinks6,this.drinks7,this.drinks8]
            console.log(this.drinks)
            //获取防护层div和购物车列表div
            if(this.$store.state.mask==false && this.$store.state.cartListShow==false && this.drinks.length>0){
                this.$store.commit("changeCartList",true)
                this.$store.commit("changeMask",true)
            }else{
                this.$store.commit("changeCartList",false)
                this.$store.commit("changeMask",false)
            }
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
</style>
