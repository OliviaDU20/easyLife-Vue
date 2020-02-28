<template>
	<div class="movieinfo-container"  v-if="movieinfo.images">
		<p class="movie-title">{{movieinfo.original_title}}</p>
		<img :src="movieinfo.images.small" alt="">
		<p class="movie-summary">{{movieinfo.summary}}</p>
	</div>
</template>

<script>
	import {Toast} from 'mint-ui';
	export default{
		data(){
			return{
				movieinfo:[],//电影详情
				id:this.$route.params.id,
			}
		},
		created(){
			this.getMovieInfo()
		},
		methods:{
			getMovieInfo(){
				this.$axios.get('/mo/subject/'+this.id+'?apikey=0df993c66c0c636e29ecbb5344252a4a')
				.then((response)=>{
					this.movieinfo=response.data
				}).catch((error)=>{
					Toast('获取电影详情失败')
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
.movieinfo-container{

	.movie-title{
		font-size: 26px;
		color: black;
		line-height: 20px;
		margin:10px;
		text-align: center;

	}
	img{
		width: 200px;
		display: block;
		margin:20px auto;

	}
	.movie-summary{
		font-size: 16px;
		color: black;
		margin:3px;
	}
}
	
</style>