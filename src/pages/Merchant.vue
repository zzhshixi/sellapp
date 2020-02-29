<template>
  <div >
   <div class="title">
     <div class="title-info">
       <div class="title-info-left">
         <p>粥品相仿（大运村）</p>
         <p>xxxxxxx</p>
       </div>
       <div class="title-info-right">
         <p><Icon type="ios-calendar" /></p>
         <p>收藏</p>
       </div>
     </div>
     <div class="title-msg">
       <div>
         <p>起送价</p>
         <p>20</p>
       </div>
        <div>
         <p>商家配送</p>
         <p>4元</p>
       </div>
        <div>
         <p>评价配送时间</p>
         <p>39分钟</p>
       </div>
     </div>
   </div>
    <div class="style"></div>
    <div class="content">
      <List size="small">
              <h1>公告活动</h1>
            <ListItem>
               粥品相仿其烹饪粥料的秘方来源于中国前年， 粥品相仿其烹饪粥料的秘方来源于中国前年 粥品相仿其烹饪粥料的秘方来源于中国前年 粥品相仿其烹饪粥料的秘方来源于中国前年 粥品相仿其烹饪粥料的秘方来源于中国前年   
            </ListItem>
            <ListItem><Icon type="ios-checkmark" />在线支付满25减5，满40减1</ListItem>
           <ListItem><Icon type="ios-checkmark" />在线支付满25减5，满40减1</ListItem>
           <ListItem><Icon type="ios-checkmark" />在线支付满25减5，满40减1</ListItem>
           <ListItem><Icon type="ios-checkmark" />在线支付满25减5，满40减1</ListItem>
           <ListItem><Icon type="ios-checkmark" />在线支付满25减5，满40减1</ListItem>
           <ListItem><Icon type="ios-checkmark" />在线支付满25减5，满40减1</ListItem>
           <ListItem><Icon type="ios-checkmark" />在线支付满25减5，满40减1</ListItem>
        </List>
    </div>
    <div class="style"></div>
    <div class="Merchants-live">
      <List size="small">
              <h1>商家实景</h1>
            
            <ListItem><img class="Merchants-live-img" src="../assets/images/main/1.jpg"><img class="Merchants-live-img" src="../assets/images/main/1.jpg"><img class="Merchants-live-img" src="../assets/images/main/1.jpg"></ListItem>
          
        </List>
    </div>
    <div class="style"></div>
    <div class="Merchants-info">
      <List size="small">
              <h1>商家信息</h1>
            <ListItem>在线支付满25减5，满40减1</ListItem>
           <ListItem>在线支付满25减5，满40减1</ListItem>
           <ListItem>在线支付满25减5，满40减1</ListItem>
           <ListItem>在线支付满25减5，满40减1</ListItem>
           <ListItem>在线支付满25减5，满40减1</ListItem>
           <ListItem>在线支付满25减5，满40减1</ListItem>
           
        </List>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="less" scoped>
.style{
  height: .5rem;
  background-color: #f3f6f6;   
}
.title-info{
  display: flex;
  padding: .3rem;
  justify-content: space-between;
  border-bottom: .02rem solid #ccc;
}
.title-msg{
  
  padding: .2rem 0;
  display: flex;
  justify-content: space-around;
  border-bottom: .02rem solid #ccc;
  div{
    width: 100%;
    border-right: .02rem solid #ccc;
    text-align: center; 
  }
}
.content{
  padding: .2rem;
}
.Merchants-live{
  padding: .2rem;
  display: flex;
  justify-content: space-betwee;
  .Merchants-live-img{
    width: 2.1rem;
    height: 1.65rem;
    margin-left:.2rem;
    overflow: hidden;
  }
}
.Merchants-info{
  padding: .2rem;
  li{
    text-indent: .4rem;
  }
}
</style>