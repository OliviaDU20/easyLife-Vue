<template>
	<div>
		
		<mt-swipe :auto="4000">
			<mt-swipe-item>
				<img src="../../images/shop3.jpg" alt="">
			</mt-swipe-item>
			<mt-swipe-item>
				<img src="../../images/movie.jpg" alt="">
			</mt-swipe-item>
			<mt-swipe-item>
				<img src="../../images/news.jpg" alt="">
			</mt-swipe-item>	
		</mt-swipe>
	</div>

</template>

<script>


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