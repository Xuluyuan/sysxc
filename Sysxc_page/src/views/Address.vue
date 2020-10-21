<template>
    <div class="address">
        <div id="ding">
            <mt-header title="我的收货地址" style="color:#5A5A5A">
                <router-link to="/me" slot="left">
                   <mt-button icon="back" style="margin-top:10px"></mt-button>
                </router-link>
            </mt-header>
        </div>
        <div>
            <mt-tab-container>
                <mt-tab-container-item class="container">
                    <div id="dizhi">
                        <img src="../../public/img/shouhuo-dizhi.png" alt="">
                        <p>您还没有收获地址，快去添加一个吧</p>
                    </div>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>

        <div>
             <router-link to="/newaddress" slot="left">
            <mt-tabbar fixed>
                <mt-tab-item>
                   
                      <mt-button size="large"> <p style="line-height:77px">添加收获地址</p> </mt-button>
                    
                </mt-tab-item>
            </mt-tabbar>
            </router-link>
        </div>
    </div>
</template>
<style scoped>

.mint-button p{
    position: absolute;
    top: -10px;
    left: 110px;
}
.mint-button{
    background-color:rgb(234,180,136) ;
    font-size: 25px;
    color: #fff;
    padding: 30px;
}
.mint-tab-item{
    padding: 0px;
}
#dizhi p{
    font-size: 20px;
}
#dizhi{
    margin-top: 170px;
}
#ding .mint-header>h1{
    padding: 0px;
    margin: 0px;
} 
#ding .mint-header{
    color: black;
    background-color: #fff;
}
.container{
    text-align: center;
    color: #5A5A5A;
}
</style>