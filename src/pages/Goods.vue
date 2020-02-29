<template>
  <div class="goods">
    <div class="goods-aside">
      <ul class="content">
        <div @click="ClickmainTitle(index)" :class="{goodsAsideItem:true, selected : index === curSelected}" v-for="(item, index) in data" :key="index">
          <span class="goods-item-name">{{item.name}}</span>
        </div>
      </ul>
    </div>
    <router-link to="/goods/goods-details" tag="div" class="goods-main">
      <ul class="content">
        <div :id="index" v-for="(item, index) in data" :key="index">
          <div class="goods-main-title" >{{item.name}}</div>
          <div class="goods-main-content" v-for="(items, index) in item.foods" :key="index">
            <img class="goods-main-img" :src="items.image" />
            <div class="goods-main-info">
              <h3 class="goods-info-name">{{items.name}}</h3>
              <p>{{items.description}}</p>
              <p>月售{{items.sellCount}}好评率{{items.rating}}%</p>
              <p>
                <span class="newPrice">￥{{items.price}}</span>
                <span class="oldPrice">￥{{items.oldPrice}}</span>
                <Icon class="goods-main-add" type="md-add-circle" />
              </p>
            </div>
          </div>
        </div>
      </ul>
    </router-link>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
import { getGoods } from "../api/apis";
export default {
  data() {
    return {
      data: [],//食品数组
      curSelected:0 //默认索引
    };
  },
  created() {
    getGoods(this.$route.query.id).then(res => {
      this.data = res.data.data;
      this.dataFoods = this.data.map(obj => obj.foods);
      console.log(this.dataFoods);
    });
  },
  mounted() {
    new Bscroll(document.querySelector('.goods-aside'),{
      click:true
    });
    
    this.main = new Bscroll(document.querySelector('.goods-main'));

  },
  methods:{
    ClickmainTitle(index){
      this.curSelected = index
      // 让右侧滚动起来
      this.main.scrollToElement(document.getElementById(index),300)
    }
  }
};
</script>

<style lang="less" scoped>
.selected{
  background-color: #fff;
}
.goods {
  display: flex;
  border-top: .02rem solid #ccc;
  height: 100%;
  .goods-aside {
    width: 90px;
    background: #f3f6f6;
    height: auto;
    overflow: hidden;
    .goodsAsideItem {
      height: 1rem;
      display: flex;
      align-items: center;
      overflow: hidden;
      border-bottom: 1px solid #ccc;
      .goods-item-name{
        margin-left: .2rem;
      }
    }
  }
  .goods-main {
    flex: 1;
    height: auto;
    overflow: hidden;
    .goods-main-title {
      background-color: #f3f6f6;
      border-left: 5px solid #d8ddde;
      height: 25px;
    }
    .goods-main-content {
      padding: 0.35rem 0 0 0.35rem;
      height: 2.2rem;
      display: flex;
      position: relative;
      border-bottom: 0.02rem solid #ccc;
      .goods-main-img {
        width: 1.15rem;
        height: 1.15rem;
      }
      .goods-main-info {
        margin-left: 0.2rem;
        .newPrice {
          font-size: 0.36rem;
          color: red;
        }
        .oldPrice {
          font-size: 0.32rem;
          margin-left: 0.15rem;
          text-decoration: line-through;
        }
        .goods-info-name {
          font-weight: bold;
        }
        .goods-main-add {
          position: absolute;
          bottom: 0.28rem;
          right: 0.3rem;
          font-size: 0.4rem;
          color: #009ed8;
        }
      }
    }
  }
}
</style>