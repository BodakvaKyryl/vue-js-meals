<template>
	<div class="flex flex-col items-center justify-center p-8">
		<input
			type="text"
			class="border-2 border-gray-500 rounded w-75"
			placeholder="Search for a meals..."
		/>

		<div class="flex justify-center gap-2 mt-2">
			<router-link
				:to="{ name: 'byLetter', params: { letter } }"
				v-for="letter of letters"
				:key="letter"
			>
				{{ letter }}
			</router-link>
		</div>
	</div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import store from '../store'
import axiosClient from '../axiosClient'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

onMounted(async () => {
	const response = await axiosClient.get('/list.php?i=list')
	console.log(response.data)
})
</script>
