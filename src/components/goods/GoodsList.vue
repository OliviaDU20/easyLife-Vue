<template>
	<div class="goods-list">
		<!-- <router-link class="goods-item" v-for="item in goodslist" :key="item.id" :to="'/home/goodsinfo/'+item.id">
			<img :src="item.img_url" alt="">
			<h1 class="title">{{item.title}}</h1>
			<div class="info">
				<p class="price">
					<span class="now">{{item.sell_price}}</span>
					<span class="old">{{item.market_price}}</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩{{item.stock_quantity}}件</span>
				</p>
			</div>
		</router-link> -->
	
		<div class="goods-item" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
			<img :src="item.img_url" alt="">
			<h1 class="title">{{item.title}}</h1>
			<div class="info">
				<p class="price">
					<span class="now">{{item.sell_price}}</span>
					<span class="old">{{item.market_price}}</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩{{item.stock_quantity}}件</span>
				</p>
			</div>
		</div>

		<mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>

	</div> 

</template>

<script>
	export default{
		data(){
			//data是往自己组建内部，挂载一些私有数据
			return{
				pageindex:1,
				goodslist:[],//存放商品列表的数组
			}
		},
		created(){
			this.getGoodsList()
		},
		methods:{
			getGoodsList(){
				//获取商品列表
				this.$http.get('http://www.liulongbin.top:3005/api/getgoods?pageindex='+this.pageindex).then(result=>{
					if (result.body.status === 0) {
						this.goodslist = this.goodslist.concat(result.body.message);
						this.goodslist.splice(8,1)
					}
				})
			},
			getMore(){
				this.pageindex++;
				this.getGoodsList();
			},
			goDetail(id){
				//使用js形式进行路由导航

				//注意：一定要区分this.$route 和 this.$router这两个对象
				//this.$route是路由参数对象，所有路由中的参数，params query都属于他
				//  this.$router 是一个路由导航对象 用它可以方便的使用js代码，实现路由的前进、后退、跳转到新的url

				//1 最简单的
				// this.$router.push('/home/goodsinfo/'+id);
				//2 第二种
				this.$router.push({path:'/home/goodsinfo/'+id});
				//3 第三种 传递一个命名的路由
				this.$router.push({name:"goodsinfo",params:{id}});

			}
		}
	}
</script>

<style lang="scss" scoped>
	.goods-list{
		display: flex;
		flex-wrap:wrap;
		padding:7px; 
		justify-content: space-between;
		.goods-item{
			width: 49%;
			border: 1px solid #ccc;
			box-shadow:  0 0 8px #ccc;
			margin:4px 0;
			padding:2px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			min-height: 293px;
			img{
				width: 100%;
			}
			.title{
				font-size: 14px;
			}
			.info{
				background-color: #eee;
				p{
					margin:0;
					padding:5px;
				}
				.price{
					.now{
						color: red;
						font-weight: bold;
						font-size: 16px;
					}
					.old{
						text-decoration: line-through;
						font-size: 12px;
						margin-left: 10px;
					}
				}
				.sell {
					display: flex;
					justify-content: space-between;
					font-size: 12px;
				}
			}
		}
	}
</style>