<template>
	<div class="grid grid-cols-1 gap-5 px-8 pb-8 md:grid-cols-3">
		<MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
	</div>
	<div v-if="!meals.length" class="flex justify-center p-8 text-red-400">
		There are no meals...
	</div>
</template>

<script setup>
import MealItem from './MealItem.vue'

const { meals } = defineProps({
	meals: {
		required: true,
		type: Array,
	},
})
</script>
