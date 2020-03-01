<template>
  <div class="main">
    <!-- 容器页面 -->
    <div class="header-box">
      <div class="headerImg" :style="{backgroundImage:'url('+data.avatar+') '}"></div>
      <div class="header">
        <div class="header-top">
          <div class="header-top-left">
            <img class="header-img" :src="data.avatar" />
          </div>
          <div class="header-top-right">
            <p>
              <img class="title-icon" src="../assets/images/brand@2x.png" alt />
              <span class="data-name">{{data.name}}</span>
            </p>
            <p class="data-description">{{data.description}}/{{data.deliveryTime}}分钟送达</p>
            <p>
              <img class="discounts-icon" src="../assets/images/decrease_1@2x.png" />
              <span class="discounts-info">在线支付满28减5，满50减10</span>
              <button class="header-nums" type="button">5个 ></button>
            </p>
          </div>
        </div>
        <div class="header-bottom">
          <img class="header-bottom-img" src="../assets/images/bulletin@2x.png" />
          <span class="header-botom-info">{{data.bulletin}}></span>
          <p class="header-botom-button">></p>
        </div>
      </div>
    </div>
    <!-- 二级路由出口 -->
    <div class="router-link-div border-bottom">
      <router-link :to="{path:'/goods',query:{id:this.data.id}}">商品</router-link>
      <router-link to="/appraise">评价</router-link>
      <router-link to="/merchant">商家</router-link>
    </div>
    <router-view></router-view>
    <transition name="slide-fade">
      <div class="shopcar-board" v-show="show">
        <div class="shop-board-title"></div>
        <div class="shop-board-title1">
          <span>已选商品</span>
          <span>清空</span>
        </div>
        <shop-car></shop-car>
      </div>
    </transition>
    <div class="shopcar-bar" @click="shopcarshow">
      <div to="/shopcar" tag="div" class="shopcar-bar-box">
        <Icon class="shopcar-bar-icon" type="ios-cart" />
      </div>
      <span class="totalPrice">￥{{totalPrice}}</span>
      <span>另需配送费￥4元</span>
      <span class="start">20起送</span>
    </div>
  </div>
</template>

<script>
import "@/assets/styles/commons/reset.css";
import "@/assets/styles/commons/border.css";
import ShopCar from "./Shopcar";
import { getSeller } from "../api/apis";
export default {
  components: {
    ShopCar
  },
  data() {
    return {
      data: {},
      show: false
    };
  },
  methods: {
    shopcarshow() {
      this.show = !this.show;
    }
  },
  created() {
    getSeller().then(res => {
      this.data = res.data.data;
    });
    this.$router.push("/goods");
  },
  computed: {
    totalPrice() {
      return this.$store.state.totalPrice;
    }
  }
};
</script>
<style lang="less" scoped>
body,
html {
  height: 100%;
}
.main {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.router-link-div {
  display: flex;
  justify-content: space-between;
  height: 1rem;
  a {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
  }
}
.header-box {
  position: relative;
}
.headerImg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  filter: blur(0.1rem);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.header {
  height: 2.68rem;
  padding-top: 0.5rem;
  position: relative;
  .header-top {
    display: flex;
    color: #fff;
    font-size: 0.22rem;
    .header-img {
      width: 1.3rem;
      height: 1.3rem;
      margin-left: 0.48rem;
    }
    .header-top-right {
      position: relative;
      margin-left: 0.3rem;
      height: 1.3rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .data-description {
        font-size: 0.26rem;
      }
      .title-icon {
        height: 0.35rem;
        width: 0.6rem;
      }
      .data-name {
        margin-left: 0.2rem;
        font-size: 0.28rem;
      }
      .discounts-icon {
        height: 0.25rem;
        width: 0.25rem;
        vertical-align: middle;
      }
      .discounts-info {
        margin-left: 0.2rem;
      }
      .header-nums {
        position: absolute;
        bottom: 0;
        right: 0.2rem;
        width: 0.8rem;
        height: 0.45rem;
        border-radius: 0.5rem;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.3);
      }
    }
  }
  .header-bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 0.55rem;
    .header-bottom-img {
      width: 0.4rem;
      height: 0.3rem;
      margin-left: 0.2rem;
    }
    .header-botom-info {
      flex: 1;
      color: #fff;
      margin-left: 0.15rem;
      font-size: 0.22rem;
      margin-right: 0.2rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .header-botom-button {
      color: #fff;
      margin-right: 0.2rem;
    }
  }
}

// 购物车
.shopcar-board {
  background: #fff;
  height: 6rem;
  width: 100%;
  overflow: scroll;
  .shop-board-title {
    position: relative;
    z-index: 3;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.4rem;
    background: #fafaad;
  }
  .shop-board-title1 {
    z-index: 3;
    position: relative;
    height: 0.8rem;
    background: rgb(240, 240, 233);
    display: flex;
    padding: 0 0.3rem;
    align-items: center;
    justify-content: space-between;
  }
}
.shopcar-bar {
  height: 1rem;
  z-index: 2;
  width: 100%;
  position: fixed;
  background-color: #121e25;
  bottom: 0;
  line-height: 1rem;
  display: flex;
  color: #909393;
  justify-content: space-between;
  .shopcar-bar-box {
    width: 0.9rem;
    height: 0.9rem;
    background-color: #2a343c;
    text-align: center;
    line-height: 0.9rem;
    border-radius: 0.45rem;
    margin-left: 0.2rem;
    padding-bottom: 0.4rem;
    bottom: 0.2rem;
    position: relative;
    .shopcar-bar-icon {
      font-size: 0.45rem;
      color: #7f8689;
    }
  }
  .totalPrice {
    color: rgb(233, 126, 39);
    font-size: 0.5rem;
  }
  .start {
    display: block;
    background-color: #2a353a;
    height: 100%;
    width: 2.14rem;
    text-align: center;
  }
}
// 购物车效果设置
.slide-fade-enter-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(100px);
  opacity: 0;
}
</style>