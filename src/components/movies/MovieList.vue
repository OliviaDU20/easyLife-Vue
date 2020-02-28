<template>
	<div class="movielist-container">
		<ul>
			<li v-for="(item,index) in movielist" :key="item.id">
				<router-link :to="'/home/movieinfo/'+item.id" class="moviebox">	
					<img :src="item.images.small" alt="">				
					<div>
						<p>电影名称：{{item.title}}</p>
						<p>电影类型：{{item.genres}}</p>
						<p>上映时间：{{item.mainland_pubdate}}</p>
						<p>豆瓣评分：{{item.rating.average}}</p>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import {Toast} from 'mint-ui';

	export default{
		data(){
			return {
				movielist:[]//电影列表
			}
		},
		created(){
			this.getMovieList()
		},
		methods:{
			getMovieList(){
				this.$axios.get('/mo/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10')
				.then((response)=>{
					if (response) {
						this.movielist = response.data.subjects;
					}
				}).catch((error)=>{
					Toast('获取电影列表失败')
				})
			}
		},

	}
</script>

<style lang="scss" scoped>
.movielist-container{

	ul{
		margin:-5px;
		padding:10px;
		list-style: none;
		li{
			padding: 8px;
			border-top: 1px solid #ccc;
			
			.moviebox{
				display: flex;
				align-items: center;
				img{
				width: 116px;
				}
				div{
					padding: 6px;
					p{
					font-size: 12px;
					color:black;
					}
				}
			}

			
		}
	}
}
	
</style>