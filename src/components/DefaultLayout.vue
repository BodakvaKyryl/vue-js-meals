<template>
	<navbar />
	<main>
		<div class="prose lg:prose-xl bg-neutral-100">
			<div class="max-w-[1200px] mx-auto">
				<router-view />
			</div>
		</div>
	</main>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
</script>
