<template>
  <div>
    <div class="title">
      <div class="title-info">
        <div class="title-info-left">
          <p>{{data.name}}</p>
          <p>
            <Rate class="start" allow-half :value.sync="data.score">

              </Rate>(661) 月售693单
          </p>
        </div>
        <div class="title-info-right">
          <p>
            <Icon style="color:red" type="md-heart" />
          </p>
          <p>收藏</p>
        </div>
      </div>
      <div class="title-msg">
        <div>
          <p>起送价</p>
          <p>{{data.minPrice}}元</p>
        </div>
        <div>
          <p>商家配送</p>
          <p>{{data.deliveryPrice}}元</p>
        </div>
        <div>
          <p>评价配送时间</p>
          <p>{{data.deliveryTime}}分钟</p>
        </div>
      </div>
    </div>
    <div class="style"></div>
    <div class="content">
      <List size="small">
        <h1>公告活动</h1>
        <div class="content-container">

          <ListItem style="color:red">{{data.bulletin}}</ListItem>
          <ListItem v-for="(content, index) in data.supports" :key="index">
            <img style="width: 12px" v-show="content.type == 1" src="../assets/images/discount_1@2x.png" />
              <img style="width: 12px" v-show="content.type == 2" src="../assets/images/decrease_1@2x.png" />
              <img style="width: 12px" v-show="content.type == 3" src="../assets/images/special_1@2x.png" /> 
            {{content.description}}
          </ListItem>
        </div>
        
      </List>
    </div>
    <div class="style"></div>
    <div class="Merchants-live">
      <List size="small">
        <h1>商家实景</h1>
        <div class="seller-img">

          <ListItem  v-for="(item, index) in data.pics" :key="index">
            <img class="Merchants-live-img" :src="item" />
          </ListItem>
        </div>
      </List>
    </div>
    <div class="style"></div>
    <div class="Merchants-info">
      <List size="small">
        <h1>商家信息</h1>
        <div class="Merchants-info-container">

        <ListItem v-for="(info, index) in data.infos" :key="index">{{info}}</ListItem>
        </div>
      </List>
    </div>
  </div>
</template>

<script>
import { getSeller } from "../api/apis";
export default {
  data() {
    return {
      data: {}
    };
  },
  created() {
    getSeller().then(res => {
      this.data = res.data.data;
      console.log(this.data)
    });
  }
};
</script>

<style lang="less" scoped>
.style {
  height: 0.5rem;
  background-color: #f3f6f6;
}
.title-info {
  display: flex;
  padding: 0.3rem;
  justify-content: space-between;
  border-bottom: 0.02rem solid #ccc;
  .title-info-right{
    text-align: center;
  }
}
.title-msg {
  padding: 0.2rem 0;
  display: flex;
  justify-content: space-around;
  border-bottom: 0.02rem solid #ccc;
  div {
    width: 100%;
    border-right: 0.02rem solid #ccc;
    text-align: center;
  }
}
.content {
  padding: 0.2rem;
  .content-container{
    padding-left: .2rem;
  }
}
.Merchants-live {
  padding: 0.2rem;
  .seller-img {
    display: flex;
    justify-content: space-between;
    .Merchants-live-img {
      width: 1.55rem;
      height: 1.65rem;
      margin-left: 0.2rem;
      overflow: hidden;
    }
  }
}
.Merchants-info {
  padding: 0.2rem;
  padding-bottom: 1rem;
  .Merchants-info-container{
    padding-left: .4rem;
  }
}
.start {
  font-size: 16px;
}
</style>