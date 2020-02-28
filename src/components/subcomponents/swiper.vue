<template>
	<div>
		<mt-swipe :auto="4000">
			<!-- 在组件中，使用v-for 循环的话，一定要使用key
			将来谁使用此轮播图组价，谁传递lunbotuList
			此时 lunbotuList 应该是父组件向子组件传值来设置 -->
		  <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
		  	<img :src="item.img" :class="{'full':isfull}">
		  </mt-swipe-item>
		</mt-swipe>
		<!-- <mt-swipe :auto="4000">
			<mt-swipe-item>
				<img src="../../images/shop3.jpg" alt="">
			</mt-swipe-item>
			<mt-swipe-item>
				<img src="../../images/movie.jpg" alt="">
			</mt-swipe-item>
			<mt-swipe-item>
				<img src="../../images/news.jpg" alt="">
			</mt-swipe-item>	
		</mt-swipe> -->
	</div>
	<!-- 1 首页中的宽和高 都是用了100% -->
	<!-- 2 在商品详情页面中，轮播图的图片如果也使用宽高为100% 页面不好看 -->
	<!-- 3 商品详情页面中的轮播图期望告诉是100% 但是宽度为自适应 -->
	<!-- 经过分析 得到问题的原因 首页中的轮播图和详情中的轮播图分歧点是  宽度到底是100%还是自适应 -->
	<!-- 既然这两轮播图其他方面没有冲突  知识宽度冲突 那我们可以定义一个属性 让轮播图的调用者手动指定 -->
</template>

<script>
	export default{
		props:["lunbotuList","isfull"]
	}

</script>

<style lang="scss" scoped>
		.mint-swipe{
		height: 200px;

		.mint-swipe-item{
			text-align: center;
			img{
				height: 100%;
			}
			
		}
	}
	.full{
		width: 100%;
	}
</style>