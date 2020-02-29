<template>
  <div>
    <div class="header">
      <Row>
        <i-Col span="10" class="header-left">
          <p>3.9</p>
          <p>综合评分</p>
          <p>高于周边商家77.2%</p>
        </i-Col>
        <i-Col span="14" class="header-right">
          <p>
            服务态度
            <Icon type="ios-star" v-for="(n,index) in 4" :key="index"></Icon>
            <Icon type="ios-star-half"></Icon>
          </p>
          <p>
            服务态度
            <Icon type="ios-star" v-for="(n,index) in 4" :key="index"></Icon>
            <Icon type="ios-star-half"></Icon>
          </p>
          <p class="deliverTime">
            送达时间
            <span >44分钟</span>
          </p>
        </i-Col>
      </Row>
    </div>
    <div class="style"></div>
    <div class="content">
      <div class="title">
        <i-button type="primary">全部</i-button>
        <i-button type="info">满意</i-button>
        <i-button type="primary">不满意(10)</i-button>
      </div>
      <div class="title-item">
        <Icon type="ios-checkmark-circle-outline" />
        <span>只看有内容的评价</span>
      </div>
      <div class="content-info" v-for="(item, index) in Appraise" :key="index">
        <img class="content-info-img" :src="item.avatar" />
        <div class="content-info-msg">
          <p class="item-username-style">
            <span>{{item.username}}</span>
            <span>{{item.rateTime | formatDate }}</span>
          </p>
          <p>
            <span>
              <Icon type="ios-star" v-for="(n,index) in item.score-1" :key="index" color="orange"></Icon>
              <Icon type="ios-star" color="orange" v-if="item.score >= (item.score - 0.5)"></Icon>
              <Icon color="orange" type="ios-star-half" v-else></Icon>
            </span>
            <span >{{item.deliveryTime}}分钟送达</span>
          </p>
          <p>{{item.text}}</p>
          <p>
            <Icon type="ios-thumbs-up" v-show="item.rateType == 0" color="skyblue" />
            <Icon type="ios-thumbs-down" v-if="item.rateType == 1" />
            <ButtonGroup size="small" v-for="(child, index) in item.recommend" :key="index">
              <Button>{{child}}</Button>
            </ButtonGroup>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getRatings } from "../api/apis";
export default {
  data() {
    return {
      Appraise: []
    };
  },
  filters: {
    formatDate: function(value) {
      let date = new Date(value);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let m = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      let s = date.getSeconds();
      s = s < 10 ? "0" + s : s;
      return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s;
    }
  },
  created() {
    getRatings().then(res => {
      this.Appraise = res.data.data;
      console.log(this.Appraise);
    });
  }
};
</script>

<style lang="less" scoped>
.header {
  padding: 0.2rem 0;
  height: auto;
  border-top: 0.02rem solid #ccc;
  border-bottom: 0.02rem solid #ccc;
  .header-left {
    border-right: 0.02rem solid #ccc;
    padding: 0 0.3rem;
  }
    .deliverTime{
      margin-left: -.55rem;
  }
}
.style {
  height: 0.5rem;
  background: #f3f6f6;
}
.ivu-col {
  text-align: center;
}
.title {
  padding: 0.3rem 0 0.2rem 0.2rem;
  border-bottom: 0.02rem solid #ccc;
  border-top: 0.02rem solid #ccc;
  button {
    margin-left: 0.14rem;
  }
}
.title-item {
  padding: 0.3rem 0 0.3rem 0.2rem;
  border-bottom: 0.02rem solid #ccc;
  font-size: 0.33rem;
}
.content-info {
  padding: 0.2rem 0.2rem;
  display: flex;
  width: 100%;
  border-bottom: 0.02rem solid #ccc;
  .content-info-img {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 0.25rem;
  }
  .content-info-msg {
  width: 100%;

    margin-left: 0.3rem;
    .item-username-style {
      display: flex;
      justify-content: space-between;
    }
    .ivu-btn-group {
      margin-left: 0.01rem;
      button {
        margin-left: 0.22rem;
        width: 1.6rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>