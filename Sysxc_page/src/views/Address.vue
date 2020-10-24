<template>
    <div class="address">
        <div id="ding">
            <mt-header title="我的收货地址" style="color:#5A5A5A">
                <router-link to="/me" slot="left">
                   <mt-button icon="back" style="margin-top:1px"></mt-button>
                </router-link>
            </mt-header>
        </div>
        <div>
            <mt-tab-container v-if="info.length==0">
                <mt-tab-container-item class="container">
                    <div id="dizhi">
                        <img src="../../public/img/shouhuo-dizhi.png" alt="">
                        <p>您还没有收获地址，快去添加一个吧</p>
                    </div>
                </mt-tab-container-item>
            </mt-tab-container>

            <div v-else v-for="(v,k) of info" :key="k" class="addresss">
                <div class="a1">
                    <p>{{info[k].a_name}}</p>
                    <p>{{info[k].address}}</p>
                </div>
                <div class="a2">
                    <p>{{info[k].address_doorid}}</p>
                    <p>{{info[k].a_tellphone}}</p>
                </div>
                <router-link to='/newaddress'>
                    <img src="../assets/images/bj.png" alt="">
                </router-link>
            </div>
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

<script>
export default {
    data(){
        return{
            isdizhi:false,
            info:{}
        }
        
    },
    mounted(){
        this.axios.get('/getAddress').then(res=>{
            let data = res.data
            this.info = data
        })
    }
}
</script>

<style scoped>
.addresss{
    position: relative;
    background-color: #F6F7F9;
    height: 65px;
}
.addresss img{
    position: absolute;
    right: 25px;
    top: 27px;
}
.a1{
    margin-top: 10px;
    margin-left: 20px;
    padding-top: 12px;
}
.a2{
    margin-top: 4px;
    margin-left: 20px;
}
.a1 p{
    display: inline;
}
.a2 p{
    display: inline;
}
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
  background-color:rgb(234,180,136);
  color: #fff !important;
}
.container{
    text-align: center;
    color: #5A5A5A;
}

</style>