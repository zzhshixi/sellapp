<template>
  <div class="main">
    <!-- 容器页面 -->
    <div class="header-box">
      <div class="headerImg" :style="{backgroundImage:'url('+data.avatar+') '}"></div>
      <div class="header" >
        <div class="header-top">
          <div class="header-top-left">
            <img class="header-img" :src="data.avatar">
          </div>
          <div class="header-top-right">
            <p>
              <img class="title-icon" src="../assets/images/brand@2x.png" alt="">
              <span class="data-name">{{data.name}}</span>
            </p>
            <p class="data-description">{{data.description}}/{{data.deliveryTime}}分钟送达</p>
            <p>
              <img class="discounts-icon" src="../assets/images/decrease_1@2x.png">
              <span class="discounts-info">在线支付满28减5，满50减10</span>
              <button class="header-nums" type="button">5个 ></button>
            </p>
          </div>
          
        </div>
        <div class="header-bottom">
          <img class="header-bottom-img" src="../assets/images/bulletin@2x.png">
          <span class="header-botom-info">{{data.bulletin}}></span>

        </div>
      </div>
    </div>
    <!-- 二级路由出口 -->
    <div class="router-link-div border-bottom" >
      <router-link :to="{path:'/goods',query:{id:this.data.id}}">商品</router-link>
      <router-link to="/appraise">评价</router-link>
      <router-link to="/merchant">商家</router-link>
    </div>
    <router-view></router-view>
    <div class="shopcar-bar">
      <router-link to="/shopcar" tag="div" class="shopcar-bar-box">
        <Icon class="shopcar-bar-icon" type="ios-cart" />
      </router-link>
        <span>$0</span>
        <span>另需配送费￥4元</span>
        <span class="start">20起送</span>
    </div>
  </div>
</template>

<script>
import '@/assets/styles/commons/border.css'
import { getSeller } from '../api/apis'
export default {
  data(){
    return{
      data:{}
    }
  },
  created(){
    getSeller().then((res)=>{
      this.data = res.data.data;
      console.log(res.data.data)
    })
    this.$router.push('/goods')
  },
}

</script>
<style lang="less" scoped>
body,html{
  height: 100%;
}
.main{
  height: 100%;
  display: flex;
  flex-direction: column;
}
.router-link-div{
  display: flex;
  justify-content: space-between;
}
.header-box{
  position: relative;
}
.headerImg{
    width:100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
    filter: blur(0.1rem);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
.header{
  height: 2.68rem;
  padding-top: .5rem;
  position: relative;
  .header-top{
    display: flex;
    color: #fff;
    font-size: .22rem;
    .header-img{
      width: 1.3rem;
      height: 1.3rem;
      margin-left: .48rem;
    }
    .header-top-right{
      position: relative;
      margin-left: .3rem;
      height: 1.3rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .data-description{
        font-size: .26rem;
      }
      .title-icon{
        height: .35rem;
        width: .60rem;
      }
      .data-name{
        margin-left: .2rem;
        font-size: .28rem;
      }
      .discounts-icon{
        height: .25rem;
        width: .25rem;
        vertical-align: middle;
      }
      .discounts-info{
        margin-left: .2rem;
      }
      .header-nums{
        position: absolute;
        bottom: 0;
        right: .2rem;
        width: .8rem;
        height: .45rem;
        border-radius: .5rem;
        color: #fff;
        background-color: rgba(0, 0, 0, .3)
      }
    }
   
  }
  .header-bottom{
    position: absolute;
    bottom:0;
    width: 100%;
    text-indent: .25rem;
    background-color: rgba(0, 0, 0, .3);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: .55rem;
    .header-bottom-img{
      width: .4rem;
      height: .3rem;
      vertical-align: middle;
    }
    .header-botom-info{
      width: 80%;
      color: #fff;
      line-height: .55rem;
      margin-left: .15rem;
      font-size: .22rem;
      margin-right: .3rem;
      
    }
  }
}
.router-link-div{
  height: .8rem;
  a{
    flex: 1;
    text-align: center;
    height: .8rem;
    line-height: .8rem;
  }
}

// 购物车
.shopcar-bar{
  height: 1rem;
  width: 100%;
  background-color: #121e25;
  position: fixed;
  bottom: 0;
  line-height: 1rem;
  display: flex;
  color: #909393; 
  justify-content: space-between;
  .shopcar-bar-box{
    width: .9rem;
    height: .9rem;
    background-color: #2a343c;
    text-align: center;
    line-height: .9rem;
    border-radius: .45rem;
    margin-left: .2rem;
    padding-bottom: .4rem;
    bottom: .2rem;
    position: relative;
  .shopcar-bar-icon{
      font-size: .45rem;
      color: #7f8689;
    }
  }
      .start{
        display: block;
        background-color: #2a353a;
        height: 100%;
        width: 2.14rem;
        text-align: center;
      }
}

</style>