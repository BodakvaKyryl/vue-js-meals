<template>
	<header
		class="sticky top-0 left-0 right-0 z-50 flex items-stretch justify-between w-full h-20 border-b border-gray-200 bg-opacity-70 bg-neutral-100 backdrop-filter backdrop-blur-lg"
	>
		<router-link
			:to="{ name: 'home' }"
			class="relative inline-flex items-center h-full px-5 text-2xl font-bold text-red-500 transition-colors hover:bg-opacity-100 hover:text-red-900 group"
		>
			Home Page
			<span
				class="absolute bottom-0 left-0 w-full h-0.5 bg-red-900 transform scale-x-0 origin-left transition-transform duration-250 ease-in-out group-hover:scale-x-100"
			></span>
		</router-link>

		<div class="flex items-center gap-1 text-xl">
			<router-link
				:to="{ name: 'byName' }"
				class="relative inline-flex items-center h-full px-5 font-bold text-red-500 transition-colors group hover:text-red-900"
			>
				Search Meals
				<span
					class="absolute bottom-0 left-0 w-full h-0.5 bg-red-900 transform scale-x-0 origin-left transition-transform duration-250 ease-in-out group-hover:scale-x-100"
				></span>
			</router-link>

			<router-link
				:to="{ name: 'byLetter' }"
				class="relative inline-flex items-center h-full px-5 font-bold text-red-500 transition-colors group hover:text-red-900"
			>
				Meals By Letter
				<span
					class="absolute bottom-0 left-0 w-full h-0.5 bg-red-900 transform scale-x-0 origin-left transition-transform duration-250 ease-in-out group-hover:scale-x-100"
				></span>
			</router-link>

			<router-link
				:to="{ name: 'ingredients' }"
				class="relative inline-flex items-center h-full px-5 font-bold text-red-500 transition-colors group hover:text-red-900"
			>
				Meals By Ingredients
				<span
					class="absolute bottom-0 left-0 w-full h-0.5 bg-red-900 transform scale-x-0 origin-left transition-transform duration-250 ease-in-out group-hover:scale-x-100"
				></span>
			</router-link>
		</div>
	</header>
</template>

<script>
export default {
	data() {
		return {
			mobileView: false,
		}
	},
	methods: {
		toggleMenu() {
			this.isMenuOpen = !this.isMenuOpen
		},
	},
}
</script>
