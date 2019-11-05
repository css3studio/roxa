<template>
	<!-- 콜랙션 컨테이너 영역 -->
	<section class="daCol blog">
		<component v-for="item in items" :key="item.name" :is="item.component" v-bind="item.props"></component>
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
			console.log(result.data)
			this.items = result.data
			this.items.forEach(function(item) {		//컴포넌트 동적 로딩
				item.component = () => import('@/components/daMdl/'+item.type+'/'+item.name+'.vue');
			});
		});

  	},
  	data() {	//렌더링할 컴포넌트 순서대로 등록
	  	return{
	  		items: []
	  		/*
	  		items: [
	  			{
					type: "Tblog",
	  				name: 'Mheader',
	  				component: () => import('@/components/daMdl/Tblog/Mheader.vue'),
	  				props: { 
						category: "카테고리",
						title: "타이틀 타이틀",
						content: "써머리가 들어갑니다.555"      
	  				},
	  			}
	  		]
	  		*/
	  	}
  	}
}
</script>
<style lang="scss">
/* 컬렉션 공통 */
.daCol.blog{
	.Tblog{
		margin-bottom:2.5rem;
	}
	.Tcommon{
		margin-bottom:2.5rem;
	}
	.ng16{
		margin-bottom:1.2rem;
	}
	dl.meta{
		font-size:0.875rem;
		font-weight:500;
		line-height:1.5rem;
		overflow:hidden;
		dt{
			float:left;
			margin-right:0.5rem;
			&:after{
				content:","
			}
		}
		dd{
			display:inline;
			span{
				float:left;
				margin-right:0.5rem;
			}
		}
	}
} 
</style>