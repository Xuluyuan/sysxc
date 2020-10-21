<template>
  <!-- 顶部导航开始 -->
  <div class="register">
    <mt-header id="title" title="用户注册">
      <router-link to="/me" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link to="/login" slot="right">
        <mt-button>登录</mt-button>
      </router-link>
    </mt-header>
    <!-- 顶部导航结束 -->
    <div class="reg-img">
      <img src="/img/logo.png" alt="">
    </div>
  <!-- 注册页面开始 -->
  <div>
    <mt-field type="text" label="用户名" placeholder="请输入用户名" :attr="{maxlength:10}" v-model="uname" @blur.native.capture="checkUname" :state="unameState"></mt-field>
    <mt-field type="text" label="手机号" placeholder="请输入手机号" :attr="{maxlength:11}" v-model="uphone" @blur.native.capture="checkUphone" :state="uphoneState"></mt-field>
    <mt-field type="password" label="密码" placeholder="请输入密码" :attr="{maxlength:10}" autocomplete='off' v-model="upwd" @blur.native.capture="checkUpwd" :state="upwdState"></mt-field>
    <mt-field id="again" type="password" label="确认密码" placeholder="请再次输入密码" :attr="{maxlength:10}" autocomplete='off' v-model="againUpwd" @blur.native.capture="checkagainUpwd" :state="againUpwdState"></mt-field>
      <button  @click="handle" class="reg">免费注册</button>
  </div>
  <!-- 注册页面结束 -->
  </div>
  
</template>
<style  scoped>
  .reg{
    text-align: center;
    background-color:#EAB488 ;
    padding:5px;
    border: 0;
    color: #fff;
    font-size: 16px;
    width: 100%;
    height: 40px;
  }
  .reg :focus{
    border: 0;
    box-shadow: none;
  }
  .mint-header{
    background-color: #EAB488;
  }
  .mint-button-text{
    text-decoration: none;
  }
  #title a{
    font-weight: lighter;
    font-size: 14px;
    margin-top: 8px;
  }
  .mint-header-button.is-right>a{
    line-height: 20px;
  }
  a:focus, a:hover {
    color: #23527c;
    text-decoration:none;
    text-decoration-line:none;
    text-decoration-style: initial;
    text-decoration-color: initial;
}
.mint-header-button.is-right>a{
    display: inline-block;
}
.reg-img{
  width: 100px;
  height: 100px;
}
.reg-img>img{
  margin-top:35px;
  margin-left: 45px;
}
</style>
<style>
  .mint-header-title {
    margin-top: 14px; 
  }
</style>
<script>
import { MessageBox } from 'mint-ui';
export default {
  data(){
    return{
      uname:"",
      upwd:"",
      againUpwd:"", 
      unameState:"",
      upwdState:"",
      againUpwdState:"",
      uphone:'',
      uphoneState:''
    }
  },
  methods:{
    checkUname(){
      let unameReg= /^[\u4e00-\u9fa5_a-zA-Z0-9]{2,10}$/
     if(unameReg.test(this.uname)){
       this.unameState="success"
       return true
     }else if(this.uname==""){
       this.$toast({
         message:'用户名是必填项',
         position:'top'
       })
       this.unameState="error"
       return false
     }else{
        this.$toast({
        message:"格式不正确",
        position:'top',
        duration:'2000',
      })
        this.unameState="error"
        return false
     }
    },
    checkUphone(){
      let uphoneReg= /^1[3-9]\d{9}$/
     if(uphoneReg.test(this.uphone)){
       this.uphoneState="success"
       return true
     }else if(this.uphone==""){
       this.$toast({
         message:'手机号是必填项',
         position:'top'
       })
       this.uphoneState="error"
       return false
     }else{
        this.$toast({
        message:"手机号格式不正确",
        position:'top',
        duration:'2000',
      })
        this.uphoneState="error"
        return false
     }
    },
    checkUpwd(){
      let upwdReg=/^[\w]{8,15}/
      if(upwdReg.test(this.upwd)){
        this.upwdState="success"
        return true
      }else if(this.upwd==""){
        this.$toast({
          message:'密码不能为空',
          position:'top'
        })
        this.upwdState="error"
        return false
      }else{
        this.$toast({
          message:'格式不正确(8~15位数字/字母组合)',
          position:'top',
          duration:'2000'
        })
        this.upwdState="error"
        return false
      }
    },
    checkagainUpwd(){
      if(this.upwd!==this.againUpwd){
        this.$toast({
          message:'两次密码不一致',
          position:'top',
          duration:'2000'
        })
        this.againUpwdState="error"
        return false
      }else if(this.againUpwd==""){
        this.$toast({
          message:'二次密码不能为空',
          position:'top'
        })
        this.againUpwdState="error"
        return false
      }else{
        this.againUpwdState="success"
        return true
      }
    },
    handle(){
      if(this.checkUname()&&this.checkUpwd()&this.checkagainUpwd()&&this.checkUphone()){
        this.axios.post('/reg',`username=${this.uname}&password=${this.upwd}&tellphone=${this.uphone}`).then(res=>{
          console.log(1)
          if(res.data.code==201){
            // this.$messagebox("注册成功！","即将跳转至登录页面...")
            // setTimeout(()=>{
            //   this.$router.push("/login")
            // },3000)
            MessageBox.confirm('',{
              title: '注册成功',
              message: '即将跳转至登录页面...',
            }).then(action => {
              if(action === 'confirm'){
                this.$router.push("/login")
              }
              if(action === 'cancel'){
                this.$router.push("/reg")
              }
            }).catch(err => {
              alert('错误的操作');
            })
            
          }else{
            // alert(res.data.message)
            this.$messagebox("注册提示","用户名已占用")
          }
        })
      }
    }
  }
}
</script>

