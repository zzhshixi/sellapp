<template>
  <div>
    <div class="goods-main">
      <ul class="content">
        <div :id="index" ref="foodList" v-for="(item, index) in goodsList" :key="index">
          <div class="goods-main-content" v-for="(items, index) in goodsList" :key="index">
            <img class="goods-main-img" :src="items.image" />
            <div class="goods-main-info">
              <h3 class="goods-info-name">{{items.name}}</h3>
              <p class="good-info-description">{{items.description}}</p>
              <p>月售{{items.sellCount}}好评率{{items.rating}}%</p>
              <p class="price-box">
                <span>
                  <span class="newPrice">￥{{items.price}}</span>
                  <span class="oldPrice">￥{{items.oldPrice}}</span>
                </span>
                <span class="btn-add">
                  <button
                    @click="numdown(items.name)"
                    v-show="items.num > 0"
                    class="goods-main-btn"
                  >-</button>
                  <label v-show="items.num > 0" class="goods-main-num">{{items.num}}</label>
                  <button @click="numadd(items.name)" class="goods-main-btn">+</button>
                </span>
              </p>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    goodsList() {
      return this.$store.state.selectedList;
    }
  },

};
</script>

<style lang="less" scoped>
.goods-main {
  flex: 1;
  height: auto;
  overflow: hidden;
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
      .good-info-description {
        width: 200px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .price-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .newPrice {
        font-size: 0.36rem;
        color: red;
      }
      .oldPrice {
        font-size: 0.32rem;
        margin-left: 0.15rem;
        text-decoration: line-through;
        width: 0.2rem;
      }
      .goods-info-name {
        font-weight: bold;
      }
      .btn-add {
        margin-right: 0.2rem;
        display: flex;
        align-items: center;
        .goods-main-btn {
          font-size: 0.4rem;
          color: #fff;
          width: 0.4rem;
          height: 0.4rem;
          line-height: 0.4rem;
          border-radius: 0.2rem;
          background: #009ed8;
        }
        .goods-main-num {
          width: 0.4rem;
          text-align: center;
        }
      }
    }
  }
}
</style>