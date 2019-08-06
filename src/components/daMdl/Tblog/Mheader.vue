<template>
  <!-- Tblog Mheader -->
  <div class="daMdl Tblog Mheader">
    <div class="inner">
      <div class="titleA">
        <strong>{{category}}</strong>
        <h1>{{title}}</h1>
      </div>
      <div class="descA">
        <p>{{content}}</p>
        <ul class="sns">
          <li class="bk"><a href="#" title="즐겨찾기"><i class="xi-bookmark"></i></a></li>
          <li class="link"><a href="#" title="링크공유"><i class="xi-link-insert"></i></a></li>
          <li class="fb"><a href="#" title="페이스북"><i class="xi-facebook"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
  <!-- //Tblog Mheader -->
</template>

<script>
export default {
  name: 'TblogMheader',
  props:{
      category: String,
      title: String,
      content: String     
  },
  /*
  data(){
    return{
      category: "카테고리",
      title: "타이틀 타이틀",
      content: "써머리가 들어갑니다."      
    }

  }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Tblog.Mheader{
  text-align:center;
  padding:5rem 0;
  margin-bottom:0;
  .inner{
    box-sizing:border-box;
  }
  .titleA{
    padding-bottom:2.5rem;
    margin-bottom:2.5rem;
    position:relative;
    strong{
      display:block;
      font-size:1.25rem;
      line-height:1.5rem;
      margin-bottom:1.25rem;
    }
    h1{
      display:block;
      font-size:2.25rem;
      line-height:2.8rem;
      padding:0 20rem;
      color:#333;
      font-weight:600;
      box-sizing:border-box;
    }
    &:after{
      content:"";
      display:block;
      width:20%;
      border-top:1px solid #ccc;
      position:absolute;
      bottom:0;
      left:50%;
      margin-left:-10%
    }
  }
  .descA{
      p{
        font-size:1.25rem;
        line-height:1.8rem;
        color:#333;
        margin-bottom:1.5rem;
        padding:0 12rem
      }
      .sns{
        li{
          display:inline-block;
          a{
            display:block;
            width:1.875rem;
            height:1.875rem;
            line-height:2.1rem;
            text-align:center;
            background-color:#e6e6e6;
            border:1px solid #ccc;
            color:#333;
            border-radius:1rem;
            box-shadow:2px 2px 5px #eee;
            i{
              font-size:1.25rem;
            }
            &:hover{
              text-decoration:none;
              background-color:#333;
              color:#fff;
              border-color:#333
            }
          }
        }
      }
  } 
}

</style>
