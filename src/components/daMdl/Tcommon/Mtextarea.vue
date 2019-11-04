<template>
  <!-- Tcommon Mtextarea -->
  <div class="daMdl Tcommon Mtextarea">
    <div class="inner" v-html="content"></div>
  </div>
  <!-- //Tcommon Mtextarea -->
</template>

<script>
export default {
  name: 'Mtextarea',
  props:{
      content: String     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/* 모듈 - 공통 본문 */
.Mtextarea{
  .inner{
    padding:0 10rem;
    box-sizing:border-box;
  }
  p{
    margin-bottom:1.5rem;
    line-height:1.5rem;
  }
} 
</style>
