<template>
  <!-- Tblog MsingleCrop -->
  <div class="daMdl Tblog MsingleCrop">					
    <div class="thumb"><img :src="image" :alt="title" /></div>
    <div class="conA">
      <div class="inner">
        <dl class="meta">
          <dt>{{title}}</dt>
          <dd>{{content}}</dd>
        </dl>
      </div>
    </div>
  </div>
  <!-- //Tblog MsingleCrop -->
</template>

<script>
export default {
  name: 'TblogMsingleCrop',
  props:{
      image: String,
      title: String,
      content: String     
  }

}
</script>

<style scoped lang="scss">
/* 모듈 - 블로그 싱글아이템  크롭형 */
.Tblog.MsingleCrop{
  position:relative;
  .thumb{
    height:38rem;
    text-align:center;
    background-color:#4f4f4f;
    overflow:hidden;
    img{
      &.fillwidth{
        width:100%;
      }
      &.fillheight{
        height:100%;
      }
    }
  }
  .conA{
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    color:#fff;
    background-color:rgba(0,0,0,0.8);
    dl.meta{
      float:right;
      width:40%;
      padding:1.25rem;
      overflow:hidden;
    }
  }
}
</style>
