<template>
	<div>
		<!-- 轮播图区域 -->
		<swiper2 ></swiper2>

		<!-- 九宫格到六宫格的改造过程 -->
		<ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                    <img src="../../images/n.jpg" alt="">
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            	<router-link to="/home/photolist">
                    <img src="../../images/img.jpg" alt="">
                    <div class="mui-media-body">精美图片</div>
                </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
                    <img src="../../images/shop.jpg" alt="">
                    <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            	<router-link to="/home/movielist">
                    <img src="../../images/m.jpg" alt="">
                    <div class="mui-media-body">热映电影</div>
                </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/cont.jpg" alt="">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/per.jpg" alt="">
                    <div class="mui-media-body">联系我们</div></a></li>
	    </ul> 
	</div>
</template>

<script>
	import {Toast} from 'mint-ui'
	import swiper from '../subcomponents/swiper.vue'
	import swiper2 from '../subcomponents/swiper2.vue'

	export default {
		data(){
			return {
				
			}
		},
		
		components:{
			swiper2
		}
	}
</script>

<style lang="scss" scoped> 

	.mui-grid-view.mui-grid-9{
		background-color: #fff;
		border:none;
		img{
			width: 60px;
			height: 60px;
		}
		.mui-media-body{
			font-size: 13px;
		}
	}
	.mui-grid-view.mui-grid-9 .mui-table-view-cell{
		border: none;
	}
</style>