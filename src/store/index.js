import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state:{
    // 商品数据
    list:[],
    selectedList:[],
    totalPrice:0
  },
  mutations:{
    initGoodsList(state,val){
      state.list = val
    },
    selectedlist(state){
    state.selectedList = []
      for(let title of state.list){
        for(let i of title.foods){
          if(i.num>0){
            state.selectedList.push(i)
          }
        }
      }
    },
    // 清空选中项
    deleteSeleted(state){
    state.selectedList = []
    state.totalPrice = 0
    for(let title of state.list){
      for(let child of title.foods){
        child.num = 0
        }
      } 
    },
    // 商品数量添加
    numadd(state,val){
      for(let title of state.list){
        for(let child of title.foods){
          if(child.name == val){
            child.num += 1 
            state.totalPrice += child.price
            return
          }
        } 
      }
    },
    numdown(state,val){
      for(let title of state.list){
        for(let child of title.foods){
          if(child.name == val){
            child.num -= 1
            state.totalPrice -= child.price
            return
          }
        
        } 
      }
    }

  },

})

