<template>
    <div>
        <div>
            <mt-header title="创建地址">
                <router-link to="/address" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
            </mt-header>
        </div>
        <div id="xx">
            <mt-field type="text" label="联系人" placeholder="请填写收货人的姓名"></mt-field>
            <mt-field type="text" label="年龄" placeholder="请填写实际年龄"></mt-field>
            <mt-field :state="statename" v-model="phone" @blur.native.capture="yong" type="text" label="手机号" placeholder="请填写11位数字手机号" :attr="{maxlength:11}"></mt-field>
            <mt-field type="text" label="地址" placeholder="请填写收获地址"></mt-field>
            <mt-field type="text" label="门牌号" placeholder="例如：B座11楼1152室"></mt-field>
        </div>
        <div id="button">
            <mt-button size="large"><span>保存</span></mt-button>
        </div>
    </div>
</template>
<style scoped>

a:focus, a:hover {
    color: #23527c;
    text-decoration:none;
    text-decoration-line:none;
    text-decoration-style: initial;
    text-decoration-color: initial;
}
#xx .mint-cell-wrapper{
    padding:40px 10px 40px 10px;
}
#button span{
    position: absolute;
    font-size: 24px;
    top: 15px;
    left: 155px;
}
.mint-header{
    background-color: #fff;
    color: #000;
}
#button .mint-button{
    background-color: rgb(234,180,136);
    padding: 30px;
    color: #fff;
    margin-top: 20px;
}
</style>
<script>
export default {
    data(){
        return{
            phone:'',
            statename:''
        }
    },
    methods:{
        yong(){
             let nameRegExp=/^1[3-9]\d{9}$/;
            let result=nameRegExp.test(this.phone)
            if(result){
                this.statename="success"
                console.log("有效手机号")
            }else{
                this.statename="error"
                this.$toast({
                message:"无效手机",
                position:"top",
                duration:"2000"
        });
            } 
        }
    }
}
</script>