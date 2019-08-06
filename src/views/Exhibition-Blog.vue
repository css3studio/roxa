<template>
	<!-- 콜랙션 컨테이너 영역 -->
	<section class="daCol blog">
		<component v-for="item in items" :is="item.component" v-bind="item.props"></component>
		<!-- Tblog Mheader 
    	<Mheader title="블로그형 기본 정보입니다" category="카테고리명" content="써머리 내용이 들어갑니다"/>
    	-->
    </section>
 </div>
</template>

<script>
// @ is an alias to /src
//import Mheader from '@/components/daMdl/Tblog/Mheader.vue'
import Vue from 'vue';
import axios from 'axios';
Vue.prototype.$http = axios;

export default {
  	name: 'blog',
  	/*
  	components: {	//사용할 컴포넌트 동적 로딩
    	Mheader: () => import('@/components/daMdl/Tblog/Mheader.vue')
    
  	},*/
	created: function () {
		const baseURI = 'http://localhost:8080/';
		this.$http.get(`${baseURI}/Exhibition-Blog-Test.json`)
		.then((result) => {
			//console.log(result.data)
			this.items = result.data
			this.items.forEach(function(item) {		//컴포넌트 동적 로딩
	    		//console.log('name is: ' + item.type)
				item.component = () => import('@/components/daMdl/Tblog/'+item.type+'.vue');
			});
		});

  	},
  	data() {	//렌더링할 컴포넌트 순서대로 등록
	  	return{
	  		items: []
	  		/*
	  		items: [
	  			{
	  				type: 'Mheader',
	  				component: () => import('@/components/daMdl/Tblog/Mheader.vue'),
	  				props: { 
						category: "카테고리",
						title: "타이틀 타이틀",
						content: "써머리가 들어갑니다.555"      
	  				},
	  			},
	  			{
	  				type: 'Mheader',
	  				component: () => import('@/components/daMdl/Tblog/Mheader.vue'),
	  				props: { 
						category: "카테고리2",
						title: "타이틀 타이틀 타이틀",
						content: "써머리가 많이 들어갑니다.777"      
	  				},
	  			},
	  		]
	  		*/
	  	}
  	}
}
</script>
