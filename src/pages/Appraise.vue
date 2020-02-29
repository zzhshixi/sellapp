<template>
<div>


  <div class=header>
      <Row>
          <i-Col span="10" class="header-left">
            <p>3.9</p>
            <p>综合评分</p>
            <p>高于周边商家77.2%</p>
          </i-Col>
          <i-Col span="14" class="header-right">
            <p>服务态度
              <Icon type="ios-star" v-for="(n,index) in 4" :key="index"></Icon>
              <Icon type="ios-star-half"></Icon>
            </p>
            <p>服务态度
         
              <Icon type="ios-star" v-for="(n,index) in 4" :key="index"></Icon>
              <Icon type="ios-star-half"></Icon>

            </p>
            <p>送达时间<span>44分钟</span>
              
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
    <div class="content-info">
        <img class="content-info-img" src="../assets/images/main/2.jpg" >
      <div class="content-info-msg">
        <p>聚****家</p>
        <p>80分钟送达</p>
        <p>油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉</p>
        <p>
          <Icon type="ios-thumbs-up" />
          <ButtonGroup size="small">
              <Button>香菇鸡肉</Button>
              <Button>香菇鸡肉</Button>
              <Button>香菇鸡肉</Button>
          </ButtonGroup>
        </p>
      </div>
      
    </div>
    <div class="content-info">
        <img class="content-info-img" src="../assets/images/main/2.jpg" >
      <div class="content-info-msg">
        <p>聚****家</p>
        <p>80分钟送达</p>
        <p>油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉</p>
        <p>
          <Icon type="ios-thumbs-up" />
          <ButtonGroup size="small">
              <Button>香菇鸡</Button>
              <Button>香菇鸡肉</Button>
              <Button>香菇鸡肉</Button>
          </ButtonGroup>
        </p>
      </div>
      
    </div>
    <div class="content-info">
        <img class="content-info-img" src="../assets/images/main/2.jpg" >
      <div class="content-info-msg">
        <p>聚****家</p>
        <p>80分钟送达</p>
        <p>油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉</p>
        <p>
          <Icon type="ios-thumbs-up" />
          <ButtonGroup size="small">
              <Button>香菇鸡</Button>
              <Button>香菇鸡肉</Button>
              <Button>香菇鸡肉</Button>
          </ButtonGroup>
        </p>
      </div>
      
    </div>
    <div class="content-info">
        <img class="content-info-img" src="../assets/images/main/2.jpg" >
      <div class="content-info-msg">
        <p>聚****家</p>
        <p>80分钟送达</p>
        <p>油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉</p>
        <p>
          <Icon type="ios-thumbs-up" />
          <ButtonGroup size="small">
              <Button>香菇鸡</Button>
              <Button>香菇鸡肉</Button>
              <Button>香菇鸡肉</Button>
          </ButtonGroup>
        </p>
      </div>
      
    </div>
    <div class="content-info">
        <img class="content-info-img" src="../assets/images/main/2.jpg" >
      <div class="content-info-msg">
        <p>聚****家</p>
        <p>80分钟送达</p>
        <p>油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉油皮凉凉</p>
        <p>
          <Icon type="ios-thumbs-up" />
          <ButtonGroup size="small">
              <Button>香菇鸡</Button>
              <Button>香菇鸡肉</Button>
              <Button>香菇鸡肉</Button>
          </ButtonGroup>
        </p>
      </div>
      
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    created(){

    }
  }
</script>

<style lang="less" scoped>
.header{
  padding: .2rem 0 ;
  border-top: .02rem solid #ccc; 
  border-bottom: .02rem solid #ccc; 
  .header-left{
    border-right: .02rem solid #ccc;
    padding: 0 .3rem;
  }
}
.style{
  height: .5rem;
  background: #f3f6f6;
}
.ivu-col{
  text-align: center;
}

.title{
  padding: .3rem 0 .2rem .2rem;
  border-bottom: .02rem solid #ccc;
  border-top: .02rem solid #ccc;
  button{
    margin-left: .14rem;
  }
}
.title-item{
  padding: .3rem 0 .3rem .2rem;
  border-bottom: .02rem solid #ccc;
  font-size: .33rem;
}
.content-info{
  padding: .2rem .2rem;
  display: flex;
  border-bottom: .02rem solid #ccc; 
  .content-info-img{
    width: .5rem;
    height: .5rem;
    border-radius: .25rem;
   
  }
  .content-info-msg{
    margin-left: .3rem;
    .ivu-btn-group{
      margin-left: .01rem;
      Button{
        margin-left: .22rem;
        
      }
    }
  }
}
</style>