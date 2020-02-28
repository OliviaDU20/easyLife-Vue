//入口文件
import Vue from 'vue'

//1.1导入路由的包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter)

//导入axios包
import axios from 'axios'

//绑定axios  这样就可以在其他组件中通过this.$axios使用axios
Vue.prototype.$axios = axios

//注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)

//每次刚进入网站，肯定会调用 main.js  在刚调用的时候 先从本地存储中把购物车的数据读出来
//放到state.car中
var car = JSON.parse(localStorage.getItem('car') || '[]')

var store = new Vuex.Store({
	state: {
		car: car, // 将 购物车中的商品的数据，用一个数组存储起来，在 car 数组中，存储一些商品的对象， 咱们可以暂时将这个商品对象，设计成这个样子   
		// { id:商品的id, count: 要购买的数量, price: 商品的单价，selected: false  }
	},
	mutations: {
		addToCar(state, goodsinfo) {
			//点击加入购物车  把商品信息保存到store的car上
			// 分析：
			// 1. 如果购物车中，之前就已经有这个对应的商品了，那么，只需要更新数量
			// 2. 如果没有，则直接把 商品数据，push 到 car 中即可

			// 假设 在购物车中，没有找到对应的商品	
			var flag = false

			state.car.some(item => {
				if (item.id == goodsinfo.id) {
					item.count += parseInt(goodsinfo.count);
					flag = true;
					return true
				}
			})
			// 如果最终，循环完毕，得到的 flag 还是 false，则把商品数据直接 push 到 购物车中
			if (!flag) {
				state.car.push(goodsinfo);
			}
			// 当 更新 car 之后，把 car 数组，存储到 本地的 localStorage 中
			localStorage.setItem('car', JSON.stringify(state.car))
		},
		updateGoodsInfo(state, goodsinfo) {
			// 修改购物车中商品的数量值
			// 分析： 
			state.car.some(item => {
				if (item.id == goodsinfo.id) {
					item.count = parseInt(goodsinfo.count)
					return true
				}
			})
			// 当修改完商品的数量，把最新的购物车数据，保存到 本地存储中
			localStorage.setItem('car', JSON.stringify(state.car))
		},
		removeFormCar(state, id) {
			//根据id从store中的购物车中删除对应的那条商品
			state.car.some((item, i) => {
				if (item.id == id) {
					state.car.splice(i, 1);
					return true;
				}
			})
			// 当修改完商品的数量，把最新的购物车数据，保存到 本地存储中
			localStorage.setItem('car', JSON.stringify(state.car))

		},
		updateGoodsSelected(state, info) {
			state.car.some(item => {
				if (item.id == info.id) {
					item.selected = info.selected
				}
			})
			localStorage.setItem('car', JSON.stringify(state.car))
		}
	},
	getters: {
		getAllCount(state) {
			var c = 0;
			state.car.forEach(item => {
				c += item.count;
			})
			return c;
		},
		getGoodsCount(state) {
			var o = {}
			state.car.forEach(item => {
				o[item.id] = item.count
			})
			return o
		},
		getGoodsSelected(state) {
			var o = [];
			state.car.forEach(item => {
				o[item.id] = item.selected;
			})
			return o;
		},
		getGoodsCountAndAmount(state) {
			var o = {
				count: 0, //勾选的数量
				amount: 0, //勾选的总价
			}
			state.car.forEach(item => {
				if (item.selected) {
					o.count += item.count
					o.amount += item.price * item.count
				}
			})
			return o;
		}
	},

})

//导入格式化时间的插件
import moment from 'moment'
//定义全局的过滤器
Vue.filter('dataFormat', function(datastr, pattern = "YYYY-MM-DD HH:mm:ss") {
	return moment(datastr).format(pattern)
})

//2.1 导入vue-resource
import VueResource from 'vue-resource'
//2.2安装Vue-resource
Vue.use(VueResource)
//设置请求的根路径
/*Vue.http.options.root = 'http://www.liulongbin.top:3005';
 */ //全局设置post时表单数据的组织格式
Vue.http.options.emulateJSON = true;

//1.3导入自己的router.js路由模块
import router from './router.js'


//导入mui的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


//按需导入mintUI中的组件
// import {Header, Swipe, SwipeItem,Button,Lazyload} from 'mint-ui'
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload);

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'


//安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)


//导入App跟组件
import app from './App.vue'

var vm = new Vue({
	el: '#app',
	render: c => c(app),
	router, //挂在路由对象到vm实例上
	store, //挂载store 状态管理对象
})