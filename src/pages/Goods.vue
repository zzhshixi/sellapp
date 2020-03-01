<template>
  <div class="goods-box">
  <div class="goods">
      <div class="goods-aside">
        <ul class="content">
          <div
            @click="ClickmainTitle(index)"
            :class="{goodsAsideItem:true, selected:index === curSelected}"
            v-for="(item, index) in goodsList"
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
    <div   class="goods-main">
      <ul class="content">
        <div :id="index" ref="foodList" v-for="(item, index) in goodsList" :key="index">
          <div class="goods-main-title">{{item.name}}</div>
          <div class="goods-main-content" v-for="(items, index) in item.foods" :key="index">
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
                  <button @click="numdown(items.name)" v-show="items.num > 0"  class="goods-main-btn">-</button>
                  <label v-show="items.num > 0"  class="goods-main-num">{{items.num}}</label>
                  <button  @click="numadd(items.name)" class="goods-main-btn">+</button>
  
                </span>
              </p>
            </div>
          </div>
        </div>
      </ul>
      
    </div>
  </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
import { getGoods } from "../api/apis";
export default {
  data() {
    return {
      scrollY: 0,
      curSelected:0
    };
  },
  created() {
    getGoods(this.$route.query.id).then(res => {
      this.$store.commit('initGoodsList',res.data.data)
      
    });
  },
  mounted() {
    new Bscroll(document.querySelector(".goods-aside"), {
      click: true,
      scrollY: true, 
    });
    this.main = new Bscroll(document.querySelector(".goods-main"), {
        probeType: 3
      }),
    this.main.on("scroll", obj => {
      this.scrollY = Math.abs(Math.round(obj.y));
      this.calculateHeight
      for(var i of this.calculateHeight){
        if(this.scrollY>=i.min && this.scrollY<=i.max){
          this.curSelected = i.index  
        }
      }
      });

  },
  computed: {
     calculateHeight(){
      var arr = [];
      var totalHeight = 0;
      for(let i=0;i<this.goodsList.length;i++){
        var curHeight = document.getElementById(i).offsetHeight;
        // arr.push({min:i == 0?0 : totalHeight-curHeight,max:totalHeight,index:i})
        arr.push({min:totalHeight,max:totalHeight+curHeight,index:i})
        totalHeight += curHeight;
      }
      return arr
    },
  
    goodsList(){
      return this.$store.state.list
    },
   
  
  },
  methods: {
    ClickmainTitle(index) {
      this.curSelected = index;
      this.main.scrollToElement(document.getElementById(index), 300);
    },
    // 商品数量添加
    numadd(val){
      this.$store.commit('numadd',val)
      this.$store.commit('selectedlist')
    },
    numdown(val){
      this.$store.commit('numdown',val)
      this.$store.commit('selectedlist')

    }

  }
};
</script>

<style lang="less" scopedd>
.selected {
  background-color: #fff;
}
.goods-box{
  position: relative;
  flex: 1;
}
.goods {
  position: absolute;
  top: 0;
  left:0;
  display: flex;
  border-top: 0.02rem solid #ccc;
  height: 100%;
  width: 100%;
  .goods-aside {
    width: 90px;
    min-width: 80px;
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
        flex: 1;
        .good-info-description{
  
           width:200px;
          white-space:nowrap;
          overflow:hidden;
          text-overflow:ellipsis;
        }
        .price-box{
          display: flex;
          justify-content:space-between;
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
          width: .2rem;;
        }
        .goods-info-name {
          font-weight: bold;
        }
        .btn-add{
            margin-right: .2rem;
            display: flex;
            align-items: center;
           .goods-main-btn {
              font-size: .4rem;
              color: #fff;
              width: .4rem;
              height: .4rem;
              line-height: .4rem;
              border-radius: .2rem;
              background: #009ed8;
        }
          .goods-main-num{
            width: .4rem;
            text-align: center;
          }
        }
       
      }
    }
  }
}
</style>