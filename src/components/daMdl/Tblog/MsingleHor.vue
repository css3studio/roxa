<template>
  <!-- Tblog MsingleHor 블로그 싱글아이템 가로형 -->
  <div class="daMdl Tblog MsingleHor">
    <div class="inner">
      <div class="thumb"><img :src="image" :alt="title"/></div>
      <div class="conA">
        <dl class="meta">
          <dt>{{title}}</dt>
          <dd>{{content}}</dd>
        </dl>
      </div>
    </div>
  </div>
  <!-- //Tblog MsingleHor -->
</template>

<script>
export default {
  name: 'MsingleHor',
  props:{
      image: String,
      title: String,
      content: String     
  }
}
</script>

<style scoped lang="scss">
.Tblog.MsingleHor{
  .inner{
    position:relative;
  }
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
      width:40%;
      padding:1.25rem;
      overflow:hidden;
    }
  }
}
</style>
