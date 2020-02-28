import VueRouter from 'vue-router'

//导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photos/PhotoList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsComment from './components/goods/GoodsComment.vue'
import MovieList from './components/movies/MovieList.vue'
import MovieInfo from './components/movies/MovieInfo.vue'


var router = new VueRouter({
	routes: [ //配置路由规则
		{
			path: '/',
			redirect: '/home'
		}, {
			path: '/home',
			component: HomeContainer
		}, {
			path: '/shopcar',
			component: ShopcarContainer
		}, {
			path: '/home/newslist',
			component: NewsList
		}, {
			path: '/home/newsinfo/:id',
			component: NewsInfo
		}, {
			path: '/home/photolist',
			component: PhotoList
		}, {
			path: '/home/photoinfo/:id',
			component: PhotoInfo
		}, {
			path: '/home/goodslist',
			component: GoodsList
		}, {
			path: '/home/goodsinfo/:id',
			component: GoodsInfo,
			name: 'goodsinfo'
		}, {
			path: '/home/goodscomment/:id',
			component: GoodsComment,
			name: 'goodscomment'
		}, {
			path: '/home/goodsdesc/:id',
			component: GoodsDesc,
			name: 'goodsdesc'
		}, {
			path: '/home/movielist',
			component: MovieList
		}, {
			path: '/home/movieinfo/:id',
			component: MovieInfo
		}



	],
	linkActiveClass: 'mui-active', //覆盖默认的路由高亮的类，默认的类叫router-link-active

})

export default router