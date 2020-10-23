import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //底部导航面板对应的Id
    barId:'index',
    //保存商品详情
    drinkList:[],
     //标识用户是否已经登录
     isLogined:localStorage.getItem('isLogined')==1 ? localStorage.getItem('isLogined') : 0,
     username:localStorage.getItem('username')!="" ? localStorage.getItem('username') : "",
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
     specShow:false,
  
  },
  mutations: {
    //清空商品详情数据
    clearDrinkList(state){
      // let arr1=[]
      // let arr2=[]
      // for(let n=0;n<7;n++){
      //   for(let m=0;m<2;m++){
      //     arr1.push(0)
      //   }
      //   arr2.push(arr1)
      // }
      // state.drinkList
      // return arr2;
    },
   //生成商品详情
   getDrinkList(state,payload){
    state.drinkList.push(payload.drink)
    state.drinkList.push(payload.drink2)
    state.drinkList.push(payload.drink3)
    state.drinkList.push(payload.drink4)
    state.drinkList.push(payload.drink5)
    state.drinkList.push(payload.drink6)
    state.drinkList.push(payload.drink7)
    return state.drinkList;
   },
   //改变底部选项卡状态
    changeBarId(state,id){
      state.barId=id;
      sessionStorage.setItem("barId",id)
    },
    //登录状态保存
    logined(state,payload){
      state.isLogined=1;
      state.user_name=payload.user_name
    },
    //用户退出系统
    quit(state){
      state.isLogined=0;
      localStorage.clear()
    },
    //购物车减法
    dec(state,payload){
      state.btn_count[payload.n1].forEach((c,index)=>{
        if(payload.n2==index){
            c--; 
        }
        state.btn_count[payload.n1].splice(index,1,c);
        return state.btn_count;
      })

    },
 //购物车加法
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
