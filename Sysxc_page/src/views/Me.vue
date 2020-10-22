<template>
    <div class="me">
        <!-- 顶部 -->
        <!-- <div >
            <mt-header fixed id="ding">
            <div slot="right" >
                <router-link to="/login">登录</router-link>
                <router-link to="/reg">注册</router-link>
            </div>
            </mt-header>
        </div> -->


        <!-- 选项卡 -->
        <div id="xuangka">
            <mt-navbar >
                <mt-tab-item>
                    <div id='xuang'>
                        <p>
                            <img src="/img/touxain.jpg" alt="">
                            <span v-if="this.$store.state.isLogined==0">
                                <router-link to="/login">登录</router-link>
                                <label >/</label>
                                <router-link to="/reg">注册</router-link>
                            </span>
                            <span v-else>
                                <router-link to="/me">{{this.$store.state.user_name}}</router-link>
                                <label >/</label>
                                <button id="my-button" @click="quit">退出</button>
                            </span>
                           
                        </p>
                        <ul>
                            <li><p>积分</p><span>0</span></li>
                            <li><p>储值金</p><span>0</span></li>
                            <li><p>优惠券</p><span>0</span></li>
                        </ul>
                    </div>
                </mt-tab-item>
            </mt-navbar>
        </div>

        <!-- 面板 -->
        <div id="body">
            <div id="mian">
                <mt-tab-container>
                    <mt-tab-container-item>
                        <div id="d1">
                            <div id="left">
                              <img src="../../public/img/huiyuan.png" alt="">
                              <span>会员等级</span> 
                            </div>
                            <div id="right">
                              <img src="../../public/img/arrow-right-ico.png" alt="">
                            </div>
                        </div>
                    </mt-tab-container-item>           
                </mt-tab-container>
                <mt-tab-container>
                    <mt-tab-container-item>
                        <div id="d1">
                            <div id="left">
                              <img src="../../public/img/fulishe.png" alt="">
                               <span>福利社</span> 
                            </div>
                            <div id="right">
                              <img src="../../public/img/arrow-right-ico.png" alt="">
                            </div>
                        </div>
                    </mt-tab-container-item>           
                </mt-tab-container>
                <mt-tab-container>
                    <mt-tab-container-item>
                        <div id="d1">
                            <div id="left">
                              <img src="../../public/img/huiyuanma.png" alt="">
                               <span>会员码</span> 
                            </div>
                            <div id="right">
                              <img src="../../public/img/arrow-right-ico.png" alt="">
                            </div>
                        </div>
                    </mt-tab-container-item>           
                </mt-tab-container>
                <mt-tab-container>
                    <mt-tab-container-item>
                        <div id="d1">
                            <div id="left">
                              <img src="../../public/img/jifenshangcheng-jifen.png" alt="">
                               <span>积分商城</span> 
                            </div>
                            <div id="right">
                              <img src="../../public/img/arrow-right-ico.png" alt="">
                            </div>
                        </div>
                    </mt-tab-container-item>           
                </mt-tab-container>
                <mt-tab-container>
                    <mt-tab-container-item>
                        <div id="d1">
                            <div id="left">
                              <img src="../../public/img/wodedingdan.png" alt="">
                               <span>我的订单</span> 
                            </div>
                            <div id="right">
                              <img src="../../public/img/arrow-right-ico.png" alt="">
                            </div>
                        </div>
                    </mt-tab-container-item>           
                </mt-tab-container>
                <router-link to="/address" slot="left">
                <mt-tab-container>
                    <mt-tab-container-item>
                        
                        <div id="d1">
                            <div id="left">
                              <img src="../../public/img/shouhuodizhi-dingwei.png" alt="">
                               <span>收获地址</span> 
                            </div>
                            <div id="right">
                              <img src="../../public/img/arrow-right-ico.png" alt="">
                            </div>
                        </div>
                        
                    </mt-tab-container-item>           
                </mt-tab-container>
                </router-link>
                <mt-tab-container>
                    <mt-tab-container-item>
                        <div id="d1">
                            <div id="left">
                              <img src="../../public/img/duihuanma.png" alt="">
                               <span>兑换码</span> 
                            </div>
                            <div id="right">
                              <img src="../../public/img/arrow-right-ico.png" alt="">
                            </div>
                        </div>
                    </mt-tab-container-item>           
                </mt-tab-container>
                <mt-tab-container>
                    <mt-tab-container-item>
                        <div id="d1">
                            <div id="left">
                              <img src="../../public/img/jidiansong.png" alt="">
                               <span>集点送</span> 
                            </div>
                            <div id="right">
                              <img src="../../public/img/arrow-right-ico.png" alt="">
                            </div>
                        </div>
                    </mt-tab-container-item>           
                </mt-tab-container>
                <mt-tab-container>
                    <mt-tab-container-item>
                        <div id="d1">
                            <div id="left">
                              <img src="../../public/img/yaoqingyouli.png" alt="">
                               <span>邀请有礼</span> 
                            </div>
                            <div id="right">
                              <img src="../../public/img/arrow-right-ico.png" alt="">
                            </div>
                        </div>
                    </mt-tab-container-item>           
                </mt-tab-container>
            </div>
        </div>
        <!-- 底部选项卡 -->
       <my-bottom></my-bottom>
    </div>
</template>
<script>
import myBottom from '../components/Bottom'
export default {
  components:{myBottom},
  methods:{
    quit(){
          let con=window.confirm('确认退出吗？')
          if(con){
              this.$store.commit('quit')
          }
        }
    }
}
</script>
<style scoped>
#my-button{
    margin-left:5px;color:#8F8F8F;
    border: 0;
    background-color: transparent;
}
#my-button :focus{
    border: 0;
    box-shadow: none;
}
#xuang a{
  color: #8F8F8F;
  font-size: 16px;
}
#xuang label{
    margin-left: 5px;
    font-size: 18px;
    color: #8F8F8F;
    vertical-align: middle;
}
#xuang a{
    margin-left: 5px;
}
#d1{
    cursor: pointer;
}
#mian .mint-tab-container-item{
    border-bottom: 1px solid rgb(237,237,237);
    font-size: 20px;
    padding: 8px;
}
#left span{
    margin-left:8px;
    position: absolute;
    color:#5A5A5A;
    font-size: 15px;
    line-height: 33px;
}
#left img{
  vertical-align: middle;
}
#left{
    float: left;
    margin-top: 5px;
}
#right{
    float: right;
    margin-top: 6px;
    margin-right: 20px;
}
#right>img{
  width:16px;
  height: 16px;
}
#mian{
    border-radius: 10px;
    margin-top: 20px;
    margin-left:10px ;
    margin-right:10px ;
    background-color: #fff;
}
#body{
    background-color: rgb(247,247,247);
    border: 1px solid #fff;
    padding: 0;
    padding-bottom: 50px;
}
#xuangka .mint-navbar .mint-tab-item{
    padding-bottom: 10px;
}
.mint-navbar .mint-tab-item.is-selected{
    border-bottom: 0;
}
#xuang ul li span{
    font-size: 22px;
    color: rgb(234,180,136);
    font-weight: bold;
}
#xuang ul li p{
    color:#8F8F8F;
    font-size: 16px;
    margin-top: 5px;
    margin-bottom: 5px;
}
.mint-navbar a:focus, a:hover {
    color: #23527c;
    text-decoration: none;
}
#xuang  p span{
    margin-left: 20px;
    font-size: 16px;
    position: absolute;
    top:45px;
    color: #5A5A5A;
}
#xuang img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-top:10px;
    margin-left: -300px;
    vertical-align: middle;
}
#ding{
    color: black;
    background-color: #fff;
}
#xuangka{
    margin: 0px;
    padding: 0px;
}
*{
    margin: 0;
    padding: 0;
}
#xuang ul{
    list-style-type: none;
    display: flex;
    justify-content: space-around;
}
</style>

