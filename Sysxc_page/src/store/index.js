import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //底部导航面板对应的Id
    barId:'index',
     //标识用户是否已经登录
     isLogined:localStorage.getItem('isLogined')==1 ? localStorage.getItem('isLogined') : 0,
     username:localStorage.getItem('isLogined')!="" ? localStorage.getItem('username') : "",
     //初始化商品数量
     btn_count:[0,0,0,0,0,0],
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
      state.username=payload.username
    },
    quit(state){
      state.isLogined=0;
      localStorage.clear()
    },
    dec(state,i){
      state.btn_count.forEach((c,index)=>{
        if(i==index){
            c--; 
        }
        state.btn_count.splice(index,1,c);
        return state.btn_count;
      })

    },
    inc(state,i){
      state.btn_count.forEach((c,index)=>{
        if(i==index){
          c++;
        }
        state.btn_count.splice(index,1,c);
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
    clearList(state,arr){
      for(let n=0;n<state.btn_count.length;n++){
        if(state.btn_count[n]>0){
          state.btn_count[n]=0;
          state.btn_count.splice(n,1,state.btn_count[n]);
        }
      } 
      state.mask=false;
      state.cartListShow=false;   
    }
  },
  actions: {
   
   },

  modules: {
  }
})
