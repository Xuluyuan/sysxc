<template>
    <div>
        <!-- <mt-header title="你饿了吗？" fixed>
            <span slot="left">
                <mt-button icon="back" type="primary">
                    <img src="../../assets/images/homepage.png" slot="icon">饿了么滴
                </mt-button>    
            </span>
            <div slot="right">
                <span>登录 </span>
                <span>|</span>
                <span> 注册</span>
                <mt-button icon="more" type="primary"></mt-button>    
            </div>
        </mt-header> -->
        <mt-header title="订单结算" fixed>
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div style="padding-top:40px">
        <p v-for="(v,k) of 50" :key="k" v-text="`${v}`"></p>

        </div>
    </div>
</template>
