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
     isLogined:sessionStorage.getItem('isLogined')==1 ? sessionStorage.getItem('isLogined') : 0,
     username:sessionStorage.getItem('username')!="" ? sessionStorage.getItem('username') : "",
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
    //导航栏侧边栏的下标
    indicator:0,
    //
    getCount:[],
    //存储随机订单号
    orderId:""
  },
  mutations: {
    //清空商品详情数据
    clearDrinkList(state){
      state.drinkList=[
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0]
      ]
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
      sessionStorage.clear()
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
    },
    //改变侧边栏下标
    changeSideId(state,i){
      state.indicator=i
    },
    //设置随机订单号
    setMa(state,id){
      state.orderId=id
    }
  },
  actions: {
   
   },

  modules: {
  },
  getters:{
    //统计仓库中的商品数量，state可以替换为任意的合法名称
    //但是无论替换成什么名称，其代表的都是当前store中的所有state
    //计算购物车的总价
    totalPrice(state){
      let totalPrice=0;
           state.btn_count.forEach((counts,index)=>{
                counts.forEach((count,index1)=>{
                    if(count>0){
                        totalPrice+=count*state.drinkList[index][index1].product_price
                    }
                })
            })
         return totalPrice
    },
    //计算购物车的商品数量
    totalCount(state){
      let totalCount=0;
      state.btn_count.forEach((counts,index)=>{
          counts.forEach((count,index1)=>{
              if(count>0){
                  totalCount+=count;
              }
          })
      })
      return totalCount
  },
  
  },
})
