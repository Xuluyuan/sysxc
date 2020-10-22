import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //底部导航面板对应的Id
    barId:'index',
     //标识用户是否已经登录
     isLogined:localStorage.getItem('isLogined')==1 ? localStorage.getItem('isLogined') : 0,
     username:localStorage.getItem('isLogined')!="" ? localStorage.getItem('user_name') : "",
     //初始化商品数量
     btn_count:[
       [0,0,0,0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0,0,0,0,0,0]
      
      ],
     //控制详情页面的防护层
     mask:false,
     //控制购物车列表的显示和隐藏
     cartListShow:false,
     //控制详情页面的显示和隐藏
     specShow:false
  },
  mutations: {
    changeBarId(state,id){
      state.barId=id;
      sessionStorage.setItem("barId",id)
    },
    logined(state,payload){
      state.isLogined=1;
      state.user_name=payload.user_name
    },
    quit(state){
      state.isLogined=0;
      localStorage.clear()
    },
    dec(state,payload){
      state.btn_count[payload.n1].forEach((c,index)=>{
        if(payload.n2==index){
            c--; 
        }
        state.btn_count[payload.n1].splice(index,1,c);
        return state.btn_count;
      })

    },
 
    inc(state,payload){
      state.btn_count[payload.n1].forEach((c,index)=>{
   
          if(payload.n2==index){
            c++;
          }

        
        state.btn_count[payload.n1].splice(index,1,c);
        // console.log(state.btn_count)
        return state.btn_count;
      })
      
    },
    //改变防护层的显示和隐藏
    changeMask(state,isShow){
      state.mask=isShow
    },
    //改变购物车列表的显示和隐藏
     //改变防护层的显示和隐藏
     changeCartList(state,listShow){
      state.cartListShow=listShow
    },
    //控制详情页面的显示和隐藏
    changeSpecShow(state,specShow){
      state.specShow=specShow
    },
    //清空购物车
    clearList(state){ 
      state.btn_count=[
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0]
       
       ],
      state.mask=false;
      state.cartListShow=false;   
    }
  },
  actions: {
   
   },

  modules: {
  }
})
