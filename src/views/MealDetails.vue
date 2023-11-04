<template>
	<div class="max-w-[800px] mx-auto p-8">
		<h1 class="mb-5 text-4xl font-bold text-red-400">
			{{ meal.strMeal }}
		</h1>
		<img
			:src="meal.strMealThumb"
			:alt="meal.strMeal"
			class="max-w-[100%] rounded-2xl mx-auto my-auto"
		/>
		<div
			class="grid grid-cols-1 py-2 mx-auto text-lg text-center sm:grid-cols-3"
		>
			<div>
				<strong class="font-bold text-red-400">Category:</strong>
				{{ ' ' + meal.strCategory }}
			</div>
			<div>
				<strong class="font-bold text-red-400">Area:</strong>
				{{ ' ' + meal.strArea }}
			</div>
			<div>
				<strong class="font-bold text-red-400">Tags:</strong>
				{{ ' ' + meal.strTags }}
			</div>
		</div>

		<div class="my-3 text-justify">
			{{ meal.strInstructions }}
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2">
			<div>
				<h2 class="mb-2 text-2xl font-semibold text-red-400">
					Ingredients
				</h2>
				<ul>
					<li v-for="(ind, index) in 20" :key="index">
						<template
							v-if="
								meal[`strIngredient${ind}`] &&
								meal[`strIngredient${ind}`].trim() !== ''
							"
						>
							{{ index + 1 }}. {{ meal[`strIngredient${ind}`] }}
						</template>
					</li>
				</ul>
			</div>
			<div>
				<h2 class="mb-2 text-2xl font-semibold text-red-400">Measures</h2>
				<ul>
					<li v-for="(ind, index) in 20" :key="index">
						<template
							v-if="
								meal[`strMeasure${ind}`] &&
								meal[`strMeasure${ind}`].trim() !== ''
							"
						>
							{{ index + 1 }}. {{ meal[`strMeasure${ind}`] }}
						</template>
					</li>
				</ul>
			</div>

			<div class="mt-4">
				<YouTubeButton :href="meal.strYoutube" />
				<a
					:href="meal.strSource"
					target="_blank"
					class="px-3 py-2 ml-3 text-indigo-600 transition-colors border-2 border-transparent rounded"
				>
					View Original Source
				</a>
			</div>
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axiosClient from '../axiosClient'
import YouTubeButton from '../components/YouTubeButton.vue'

const route = useRoute()
const meal = ref({})

onMounted(() => {
	axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
		meal.value = data.meals[0] || {}
	})
})
</script>
