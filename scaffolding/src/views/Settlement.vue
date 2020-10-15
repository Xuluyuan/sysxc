<template>
    <div class="settlement">
        <!-- 头部导航开始 -->
        <mt-header title="订单结算">
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
                        <p class="shop_title">2786书亦烧仙草深圳龙华星光城店</p>
                        <p class="shop_distance">你距离当前门店6.9km</p>
                    </li>
                    <li>
                        <p slot="left">取餐时间</p>
                        <span>
                            我已到店<button slot="right"></button>
                        </span>
                    </li>
                    <li>
                        <span>用餐方式</span>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 面板结束  -->
    </div>
</template>
<style>
    /* 头部导航开始 */
    .settlement .mint-header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 666;
        background-color: #fff;
        height: 70px;
        line-height: 70;
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
        margin-top: 70px;
        padding: 10px;
    }
    .mian_container ul {
        padding: 0 15px 0 15px;
        border: 1px solid #ececec;
        border-radius: 5px;
        
    }
    .mian_container li {
        padding: 15px 0 15px 0;
    }
    .mian_container li:not(:last-child)  {
        border-bottom: 1px solid #ececec;
    }
    /* 面板结束 */
</style>