<template>
  <!-- Tcommon Mbutton -->
  <div class="daMdl Tcommon Mbutton">
    <div class="inner">
      <a class="button is-primary" :href="href">{{text}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mbutton',
  props:{
      href: String,
      text: String     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/* 모듈 - 공통 버튼 */
.Mbutton{
  .inner{
    padding:0 10rem;
    box-sizing:border-box;
  }
}
</style>
