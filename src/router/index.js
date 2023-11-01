import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import mealList from '../views/mealList.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/letter/:letter',
		name: 'byLetter',
		component: mealList,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
