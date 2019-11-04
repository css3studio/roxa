<template>
  <!-- Tblog MdoubleCrop -->
  <div class="daMdl Tblog MdoubleCrop">
    <ul class="inner">
      <li v-for="child in childs">
        <div class="thumb"><img :src="child.image" :alt="child.title"/></div>
        <div class="conA">
          <dl class="meta">
            <dt>{{child.title}}</dt>
            <dd>{{child.content}}</dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
  <!-- //Tblog MdoubleCrop -->
</template>

<script>
export default {
  name: 'TblogMdoubleCrop',
  props:{
    childs: Array
  }

}
</script>

<style scoped lang="scss">
/* 모듈 - 블로그 더블아이템  크롭형 */
.Tblog.MdoubleCrop{
  .inner{
    overflow:hidden;
    li{
      position:relative;
      width:48.5%;
      float:left;
      &:first-child{
        margin-right:3%
      }
      .thumb{
        overflow:hidden;
        height:26.75rem;
        line-height:26.75rem;
        text-align:center;
        background-color:#f1f3f5;
        img{
          &.fillwidth{
            height:100%;
            vertical-align:middle;
          }
          &.fillheight{
            height:90%;
            vertical-align:middle;
          }
        }
      }
      .conA{
        background-color:#1c1c1c;
        overflow:hidden;
        height:7.9375rem;
        .meta{
          margin:1.25rem;
          color:#fff;
        }
      }

    }
  }
}
</style>
