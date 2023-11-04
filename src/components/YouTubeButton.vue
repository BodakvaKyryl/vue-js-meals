<template>
	<a
		:href="href"
		target="_blank"
		class="px-3 py-2 text-white transition-colors bg-red-500 rounded red-orange-500 hover:bg-red-100 hover:text-black"
	>
		<slot>YouTube</slot>
	</a>
</template>

<script setup>
const props = defineProps({
	href: String,
})
</script>
