<template>
  <div class="goods">
    <div class="goods-aside">
      <ul class="content">
        <div
          @click="ClickmainTitle(index)"
          :class="{goodsAsideItem:true, selected : index === currentIndex}"
          v-for="(item, index) in data"
          :key="index"
        >
          <span class="goods-item-name">
          <img style="width: 12px" v-show="item.type == 1" src="../assets/images/discount_1@2x.png" />
          <img style="width: 12px" v-show="item.type == 2" src="../assets/images/decrease_1@2x.png" />
          <img style="width: 12px" v-show="item.type == 3" src="../assets/images/special_1@2x.png" /> 
            {{item.name}}
            </span>
        </div>
      </ul>
    </div>
    <router-link to="/goods/goods-details" tag="div" class="goods-main">
      <ul class="content">
        <div :id="index" ref="foodList" v-for="(item, index) in data" :key="index">
          <div class="goods-main-title">{{item.name}}</div>
          <div class="goods-main-content" v-for="(items, index) in item.foods" :key="index">
            <img class="goods-main-img" :src="items.image" />
            <div class="goods-main-info">
              <h3 class="goods-info-name">{{items.name}}</h3>
              <p class="good-info-description">{{items.description}}</p>
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
      data: [], //食品数组
      scrollY: 0,
      listHeight: []
    };
  },
  created() {
    getGoods(this.$route.query.id).then(res => {
      this.data = res.data.data;
      this.dataFoods = this.data.map(obj => obj.foods);
      console.log(this.data)
    });
  },
  mounted() {
    new Bscroll(document.querySelector(".goods-aside"), {
      click: true
    });
    // 定事调用方法 优化性能
    setTimeout(() => {
      this._initScroll();
      this.calculateHeight();
    }, 300);
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = 0;
        let height2 = this.listHeight[i];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i;
        }
      }
      return 0;
    }
  },
  methods: {
    ClickmainTitle(index) {
      this.curSelected = index;
      this.main.scrollToElement(document.getElementById(index), 300);
    },
    // 初始化滚动距离和事件
    _initScroll() {
      (this.main = new Bscroll(document.querySelector(".goods-main"), {
        probeType: 3
      })),
        this.main.on("scroll", obj => {
          this.scrollY = Math.abs(Math.round(obj.y));
        });
    },
    // 计算每个区间的高度
    calculateHeight() {
      var contentWrapper = this.$refs.foodList;
      var height = 0;
      contentWrapper.map((val, i) => {
        let item = contentWrapper[i];
        height += item.clientHeight; // 获得每个区间的高度
        this.listHeight.push(height);
      });
    }
  }
};
</script>

<style lang="less" scopedd>
.selected {
  background-color: #fff;
}
.goods {
  display: flex;
  border-top: 0.02rem solid #ccc;
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
      .goods-item-name {
        margin-left: 0.2rem;
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
        .good-info-description{
  
           width:200px;
          white-space:nowrap;
          overflow:hidden;
          text-overflow:ellipsis;
        }
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