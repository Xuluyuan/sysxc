<template>
    <div class="settlement">
        <!-- 头部导航开始 -->
        <mt-header title="订单结算" fixed>
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <!-- 头部导航结束 -->

        <!-- 面板开始  -->
        <div class="mian">
            <div class="mian_container">
                <ul class="shop">
                    <li>
                        <mt-cell title="2786书亦烧仙草深圳龙华星光城店" label="你距离当前门店6.9km"></mt-cell>
                    </li>
                    <li>
                        <mt-cell title="取餐时间" is-link @click.native="way">
                            <span class="mint-cell-value">我已到店</span>
                        </mt-cell>
                        <mt-popup
                            v-model="popupVisible"
                            position="bottom">
                            <div class="way_popup">
                                <div>
                                    <span class="cancel" @click="popupVisible = false">取消</span>
                                    <span class="affirm" @click="addrConfirm">确认</span>
                                </div>
                                <mt-picker ref='picker' :slots="slots" value-key='name' @change="onValuesChange"></mt-picker>
                            </div>
                        </mt-popup>
                    </li>
                    <li>
                        <mt-cell title="用餐方式">
                            <mt-radio align="right" v-model="valueChoose" :options="options"></mt-radio>
                        </mt-cell>
                        <p class="p_hint">为了你和家人的健康，推荐选择打包带走</p>
                        <div style="clear: both"></div>
                    </li>
                </ul>
                <ul class="detailed">
                    <li>
                        <mt-cell title="商品明细"></mt-cell>
                    </li>
                    <li class="product">
                        <div id="product_bool">
                            <mt-cell title="杨枝甘露酸奶" label="冰/常规糖">
                                <div>
                                    <span class="count">x1</span>
                                    <span class="price">¥18</span>
                                </div>
                            </mt-cell>
                            <mt-cell title="草莓啵啵酸奶" label="冰/半糖">
                                <div>
                                    <span class="count">x1</span>
                                    <span class="price">¥17</span>
                                </div>
                            </mt-cell>
                            <mt-cell title="草莓啵啵酸奶" label="冰/半糖">
                                <div>
                                    <span class="count">x1</span>
                                    <span class="price">¥17</span>
                                </div>
                            </mt-cell>
                            <mt-cell title="草莓啵啵酸奶" label="冰/半糖">
                                <div>
                                    <span class="count">x1</span>
                                    <span class="price">¥17</span>
                                </div>
                            </mt-cell>
                        </div>
                        <div class="more iconfont"  @click="goMore($event)">展开更多&#xe733;</div>
                    </li>
                    <li>
                        <div class="coupon" @click= "coupon()">
                            <mt-cell title="优惠卷" is-link >
                                <span class="juan">有2张可用优惠卷</span>
                                <img slot="icon" src="../assets/images/juan.png" >
                            </mt-cell>
                        </div>
                        <div class="coupon_header">
                            <mt-popup
                            v-model="couponVisible"
                            position="bottom">
                            <mt-header title="我的优惠卷" fixed ></mt-header>
                            <div class="coupon_mian">
                                <div class="coupon_flex">
                                    <div class="line"></div>
                                    <div>可用优惠卷(两张)</div>
                                    <div class="line"></div>
                                </div>
                                <div class="coupon_container">
                                    <div class="coupon_div">
                                        <mt-cell title="¥3" label="满20元可用">
                                            <div class="coupon_explain">
                                                <p class="minus">满20减3元优惠卷</p>
                                                <p class="deadline">6天后到期</p>
                                                <p class="coupon_name">互斥卷</p>
                                            </div>
                                            <!-- <mt-radio align="right" name="sex" v-model="valueCoupon" :options="coupon_options"></mt-radio> -->
                                            <input type="radio" name="coupon" value="-3" @click="radioed($event)">
                                         </mt-cell>
                                    </div>
                                    
                                    <p class="p_hint">查看详情 ></p>
                                    <div style="clear: both"></div>
                                </div>
                                <div class="coupon_container">
                                    <div class="coupon_div">
                                        <mt-cell title="9折">
                                        <div class="coupon_explain">
                                            <p class="minus">夏季新品九折卷</p>
                                            <p class="deadline">20天后到期</p>
                                            <p class="coupon_name">互斥卷</p>
                                        </div>
                                        <!-- <mt-radio align="right" name="sex" v-model="valueCoupon" :options="coupon_options"></mt-radio> -->
                                            <input type="radio" name="coupon" value="/9" @click="radioed($event)">

                                    </mt-cell>
                                    </div>
                                    
                                    <p class="p_hint">查看详情 ></p>
                                    <div style="clear: both"></div>
                                </div>
                            </div>
                            </mt-popup>
                        </div>
                    </li>
                    <li>
                        <mt-cell>
                            <div>
                                <span class="sum">共2件商品, 小计: </span>
                                <span class="total">¥35</span>
                            </div>
                        </mt-cell>
                    </li>
                </ul>
                <ul>
                    <li>
                        <mt-cell title="使用积分" :label="`共${integral}积分，每10积分可抵¥1`">
                            <mt-switch v-model="integralVal" :disabled="disableds" @click.native="integrals($event)"></mt-switch>
                            <img slot="icon" src="../assets/images/jifen.png" >
                        </mt-cell>
                    </li>
                </ul>
                
            </div>
        </div>
        <!-- 面板结束  -->

        <!-- 底部开始 -->
         <div class="my_footer">
             <span class="footer_price">¥35</span>
             <button class="goPay" @click="goPay()">去支付</button>
         </div>
         <div class="footer_div">
             <mt-popup v-model="pay_popup">
                <div class="pay_container">
                    <div class="pay_close" @click="shut">×</div>
                    <div class="pay_img">
                        <img src="../assets/images/ewm.png" alt="">
                    </div>
                    <p class="pay_text">请使用微信扫一扫完成支付</p>
                </div>
            </mt-popup>
         </div>
         
        <!-- 底部结束 -->
    </div>
</template>

<style>
    /* 头部导航开始 */
    .settlement .mint-header  {
        height: 60px;
        background-color: #fff;
    }
    .settlement .mint-header-title,
    .mintui-back:before {
        font-size: 16px;
        color: #000;
        font-weight: 700;
    }
    .settlement .mintui-back:before {
        display: block;
        font-size: 20px;
        font-weight: 550;
        margin-top: -6px;
    }
    /* 头部导航结束 */

    /* 面板开始 */
    .settlement .mian {
        margin-top: 60px;
        padding: 10px;
    }
    .mian_container ul {
        padding: 0 15px 0 15px;
        margin-bottom: 10px;
        border: 1px solid #ececec;
        border-radius: 5px;
    }
    .mian_container li {
        padding: 15px 0 15px 0;
    }
    .mian_container li:not(:last-child)  {
        border-bottom: 1px solid #ececec;
    }
    
    /* 可能修改 */
    .settlement .mint-cell {
        min-height: 0;
    }
    .settlement .mint-cell:last-child {
        background-image: none;
        background-position: 0;
    }
    .settlement .mint-cell-wrapper {
        background-image: none;
        padding: 0;
    }
    .settlement .mint-cell-text {
        color: #333;
        font-size: 16px;
        font-weight: 700;
    }
    .settlement span.mint-cell-value {
        font-size: 14px;
        display: inline-block;
        color: #EAB488;
        margin-right: 10px;
    }
    .settlement .mint-cell-allow-right:after {
        border: 1px solid #000;
        border-bottom-width: 0;
        border-left-width: 0;
        width: 7px;
        height: 7px;
    }
    
    .settlement .mint-radiolist .mint-cell {
       display: inline-block;
    }
    .settlement .mint-cell .mint-radio-label {
        font-size: 13px;
        margin-left: 0;
        margin-right: 10px;
    }
    .p_hint {
        float: right;
        font-size: 12px;
        color: #F5A623;
        margin-right: 10px;
    }
    /* 设置单选框中的样式 */
    .settlement .mint-radio-core{width: 20px;height: 20px;}
    .settlement .mint-cell .mint-radio-core::after{top: 3.5px;left: 2.5px;position: absolute;width: 0px;height: 0px;}
    .settlement .mint-cell .mint-radio-input:checked + .mint-radio-core{
        background-color: #EAB488;
        background-image: url('../assets/images/dui2.png') ;
        background-repeat: inherit;
        border-color: #EAB488;
    }
   /* --------------------------- */

   /* 商品明细 */
    .settlement .product .mint-cell:not(:first-child) {
        margin-top: 20px;
    }
    .settlement .product .mint-cell-text {
        font-size: 15px;
        font-weight: 400;
    }
    .settlement .count {
        color: #A7A7A7;
        font-size: 13px;
        margin-right: 65px;
    }
    .settlement .price {
        color: #404040;
        font-size: 15px;
        margin: 17px;
    }
    /* 优惠卷 */
    .settlement .coupon .mint-cell-text {
        font-size: 15px;
        font-weight: 400;
    }
    .settlement .juan {
        font-size: 13px;
        color: #EAB488;
        margin-right: 10px;
    }
    
    /* 总价 */
    .settlement .sum {
        font-size: 14px;
        color: #666;
    }
    .settlement .total {
         font-size: 18px;
         color: #F5333D;
         margin-right: 20px;
     }

     .settlement ul:last-child {
         margin-bottom: 61px;
     }
    /* 面板结束 */

    /* 底部开始 */
    .settlement .my_footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 10px;
        text-align: center;
        background-color: #fff;
        border-top: 1px solid #ececec;
    }
    .settlement .footer_price {
        float: left;
        font-size: 18px;
        font-weight: 700;
        color: #f00;
        margin-top: 15px;
    }
    .settlement .goPay {
        float: right;
        width: 125px;
        height: 40px;
        border-radius: 40px;
        color: #fff;
        background-color: #EAB488;
        outline: none;
        border: none;
    }
    /* 底部结束 */

    /* 用餐方式弹窗开始 */
    .settlement .mint-popup-bottom {
        width: 100%;
        padding: 15px;
    }
    
    .way_popup {
        height: 300px;
        padding: 0 15px;
    }
    .way_popup .cancel {
        float: left;
        color: #000;
    }
    .way_popup .affirm {
        float: right;
        color: #07C160;
    }
    /* 用餐方式弹窗结束 */
    /* #EAB488 */

    /* 优惠卷弹窗 */
    .coupon_header .mint-header {
        height: 50px;
    }
    .coupon_header .mint-header-title {
        font-weight: 400;
        font-size: 15px;
        color: #000;
    } 
    .coupon_mian {
        margin-top: 35px;
        background-color: #f3f3f3;
        padding: 10px;
    }
    .coupon_flex {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 5px 0 15px 0;
    }
    .coupon_header .line {
        display: inline-block;
        width: 85px;
        border-bottom: 1px solid #cbcbcb;
    }
    .coupon_container {
        background-color: #fff;
        padding: 10px;
    }
    .settlement .coupon_container .mint-cell-text {
        font-size: 35px;
        font-weight: 500;
        color: #EAB488;
    }
    .coupon_container .coupon_div {
        border-bottom: 1px dashed #cbcbcb;
        margin-bottom: 10px;
        padding: 12px 0;
    }
    .coupon_container:not(:last-child) {
        margin-bottom: 10px;
    } 
    .coupon_explain {
        margin-right: 62px;
        color: #333;
        line-height: 20px;
    }
    .coupon_explain .minus {
        font-size: 14px;
    }
    .coupon_explain .deadline {
        font-size: 12px;
    }
    .coupon_explain .coupon_name {
        display: inline-block;
        font-size: 14px;
        color: #F32D09;
        background-color: #FEEAE6;
    }

     /* 支付弹窗 */
    .footer_div .mint-popup {
        border-radius: 5px;
    }
    .pay_container  {
        position: relative;
        padding: 50px 20px;
    }
    .pay_close {
        top: 5px;
        right: 10px;
        position: absolute;
        font-size: 20px;
    }
    .pay_img  {
        margin: 30px 40px;
    }
    .pay_img img {
        width: 150px;
    }
    .pay_text {
        text-align: center;
        font-size: 16px;
    }

    /* -------优惠卷展开更多---------- */
    .product_hidden {
        height: 143px;
        overflow: hidden;
    }
    .more {
        font-size: 12px;
        color: #5E5E5E;
        text-align: center;
        margin-top: 20px;
    }
</style>
<script>
import $ from '../comoon/js/jquery-1.11.3';
import { Toast } from 'mint-ui';

export default {
    data() {
        return {
            valueChoose: 'pack',
            options: [{
                label: '打包带走',
                value: 'pack'
            },{
                label: '店内用餐',
                value: 'shop'
            }],
            integralVal: false,
            // 积分
            integral: 5,
            popupVisible: false,
            couponVisible: false,
            product: '',
            slots: [{
                values: [{
                    id: 0,
                    name: "我已到店"
                } ],
            }],
            valueCoupon: '',
            // 优惠卷
            
           // 开关按钮
           disableds: false,
           // 消息提示框
           toastInstanse: '',
           // 支付弹出框
           pay_popup: false,
           // 展开更多判断条件
           bool:true
        }
    },
    methods: {
        // 取餐时间
        way() {
            this.popupVisible = true;
        },
        onValuesChange(picker, values) {
            this.product = values[0].name;
        },
        addrConfirm() {
            console.log(this.product)
            this.popupVisible = false;
        },
        // 优惠卷
        coupon() {
            this.couponVisible = true;
        },
        // 积分
        integrals(event) {
            if(this.integral >= 10) {
                // console.log(event)
                let minus = parseInt(this.integral / 10);
                // 总价减去minus，获取扣除积分后的差价
                // 应该是支付完后再 重新计算积分
                // this.integral -= minus * 10;
            } else {
                this.disableds = true;
                if(!this.toastInstanse) {
                    this.toastInstanse = Toast({
                        message: "积分不足无法积分抵现",
                        position: "middle",
                        duration: 3000,
                        className: 'toast_fontSzie'
                    });  
                } else {
                    this.toastInstanse.close();
                    setTimeout(() => {
                        this.toastInstanse = null;
                    },100) 
                }
            }         
        },
        // 支付弹窗
        goPay() {
            this.pay_popup = true;
        },
        shut() {
            this.pay_popup = false;
        },
        // 展开更多
        goMore(event) {
            if(this.bool) {
                event.target.innerHTML = `收起&#xe734;`;
                $("#product_bool").removeClass('product_hidden');
                this.bool = false;
            } else {
                event.target.innerHTML = `展开更多&#xe733;`;
                $("#product_bool").addClass('product_hidden');
                this.bool = true;
            }
            

        },
        radioed(event) {
            console.log(event.target.value)
        }
  },
    watch: {
        valueChoose(val) {
            console.log(val)
        }
    },
    created(){
        // 设置单选框的样式，网上找到的
        setTimeout(()=>{ 
            $('.mint-radio-core').removeClass('mint-radio-core').addClass('mint-radio-core');
            $('.mint-radio-input:checked + .mint-radio-core').removeClass('.mint-radio-input:checked + .mint-radio-core').addClass('.mint-radio-input:checked + .mint-radio-core')
            
        },10);
    },
    mounted() {
        // --------------- 展开更多--------------------- // 
        var leng = $("#product_bool").children().length;
        if(leng > 3) {
            $(".more").css("display","block")
            $("#product_bool").addClass('product_hidden')
        } else if(leng<=3){
            $(".more").css("display","none")
            $("#product_bool").removeClass('product_hidden')
        }
    }
}
</script>