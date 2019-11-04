import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import './assets/js/sleeverary'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  methods: {
    //이미지 가로-세로 비율 표시
    setImgRatio() {
      var imgs = this.$el.querySelectorAll('img');
      imgs.forEach(function(currentValue, index, array) {
        var img = new Image();
        img.src = currentValue.getAttribute('src');
        var this_img = currentValue;
        img.onload = function() {
          var fillClass = (img.height > img.width)
                ? 'fillheight' : 'fillwidth';
          this_img.classList.add(fillClass);
        };
  
      });
    }
  },
  mounted: function () {
    var _this = this;
    setTimeout(function(){
      _this.setImgRatio();
    },500)
   
  }
}).$mount('#app')
