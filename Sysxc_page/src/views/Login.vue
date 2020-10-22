<template>
<div class="my-login">
  <mt-header class="top" title="用户登录">
    <router-link slot="left" to="/me">
      <mt-button icon="back"></mt-button>
    </router-link>
    <router-link to='/reg' slot="right">
      <mt-button>注册</mt-button>
    </router-link>
  </mt-header>
  <div class="reg-img">
    <img src="/img/logo.png" alt="">
  </div>
  <div>
    <mt-field type="text" placeholder="请输入用户名" label="用户名" v-model="uname" @blur.native.capture="checkUname" :state="unameState"></mt-field>
    <mt-field type="password" placeholder="请输入密码" label="密码" v-model="upwd" @blur.native.capture="checkUpwd" :state="upwdState"></mt-field>
    <button  @click="holder" class="login">登录</button>
    <p style="text-align:center;margin-top:8px">没有账号？<span @click="toReg" style="color:#EAB488">立即注册</span></p>
  </div>
</div>
</template>
<style scoped>
.reg-img{
  width: 100px;
  height: 100px;
}
.reg-img>img{
  margin-top:35px;
  margin-left: 45px;
}
.top button{
  line-height: 43px;
}
  .login{
    text-align: center;
    background-color:#EAB488 ;
    padding:5px;
    border: 0;
    color: #fff;
    font-size: 16px;
    width: 100%;
    height: 40px;
  }
   .mint-header{
    background-color: #EAB488;
  }
 
a:focus, a:hover {
    color: #23527c;
    text-decoration:none;
    text-decoration-line:none;
    text-decoration-style: initial;
    text-decoration-color: initial;
}

</style>
<style>
  .mint-header-title {
    margin-top: 14px; 
  }
</style>
<script>
export default {
  data(){
    return{
      uname:"",
      upwd:"",
      upwdState:"",
      unameState:""
    }
  },
  methods:{
    toReg(){
      this.$router.push('/reg')
    },
    checkUname(){
      let unameReg=/^[\u4e00-\u9fa5_a-zA-Z0-9]{2,10}$/
      if(unameReg.test(this.uname)){
        this.unameState="success"
        return true
      }else{
        this.$toast({
          message:'用户名不正确',
          position:'top',
          duration:'2000'
        })
        this.unameState="error"
        return false
      }
    },
    checkUpwd(){
      let upwdReg=/^[\w]{8,15}$/
      if(upwdReg.test(this.upwd)){
        this.upwdState="success"
        return true
      }else{
        this.$toast({
          message:'密码不正确',
          position:'top',
          duration:'2000'
        })
        this.upwdState="error"
        return false
      }
    },
    holder(){
      if(this.checkUname()&&this.checkUpwd()){
        let obj={
          username:this.uname,
          password:this.upwd,
        }
        console.log(this.qs.stringify(obj))//username=dsddddd&password=111111111
        console.log(decodeURI(this.qs.stringify(obj)))//username=dsddddd&password=111111111&love[0]=aaa&love[1]=bbb&love[2]=ccc
        this.axios.post('/login',this.qs.stringify(obj)).then(res=>{
          console.log(res.data.info)
          if(res.data.code==200){
            //储存用户名
            localStorage.setItem('username',res.data.info.user_name)
            //提交mutations
            this.$store.commit("logined",res.data.info)
            //必须要将数据存储到webStorge中，因为用户刷新后记录依旧要保持
            localStorage.setItem('isLogined',"1")
            this.$router.push("/me")
          }else{
            console.log(res.data.message)
            this.$messagebox("登录信息","用户名或密码错误")
          }
        })
      }
    }
  }

}
</script>

