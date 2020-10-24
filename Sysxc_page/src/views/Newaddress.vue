<template>
    <div class="newAddress">
        <div>
            <mt-header title="创建地址">
                <router-link to="/address" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
            </mt-header>
        </div>
        <div id="xx">
            <mt-field type="text" label="联系人" placeholder="请填写收货人的姓名" v-model="a_name"></mt-field>

            <mt-field :state="statename" v-model="a_tellphone" @blur.native.capture="yong" type="text" label="手机号" placeholder="请填写11位数字手机号" :attr="{maxlength:11}"></mt-field>
            <mt-field type="text" label="地址" placeholder="请填写收获地址" v-model="address"></mt-field>
            <mt-field type="text" label="门牌号" placeholder="例如：B座11楼1152室" v-model="address_doorid"></mt-field>
        </div>
        <div id="button" @click="bc">
            <mt-button size="large"><span>保存</span></mt-button>
        </div>
    </div>
</template>
<style scoped>

.newAddressa a:focus, a:hover {
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
    font-size: 20px;
    top: 7px;
    left: 163px;
}
header.mint-header{
    background-color:rgb(234,180,136);
    color: #fff;
}
#button .mint-button{
    background-color: rgb(234,180,136);
    padding: 15px;
    color: #fff;
    margin-top: 20px;
}
</style>
<script>
export default {
    data(){
        return{
            address_id:'',
            address_doorid:'',
            a_tellphone:'',
            a_name:'',
            address:'',
            statename:''
        }
    },
    methods:{
         bc(){
         this.axios.post('/aaddress','address='+this.address+'&a_name='+this.a_name+'&address_doorid='+this.address_doorid+'&a_tellphone='+this.a_tellphone).then(res=>{
            let data = res.data
            if(data.code == 200){
                this.$router.push('/address')
            }else(
                console.log('插入失败')
            )
            
        })
    },
        yong(){
             let nameRegExp=/^1[3-9]\d{9}$/;
            let result=nameRegExp.test(this.a_tellphone)
            if(result){
            }else{
                this.statename="error"
                this.$toast({
                message:"无效手机",
                position:"top",
                duration:"2000"
        });
            } 
        },
    }
}

</script>