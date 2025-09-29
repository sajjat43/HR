<template>
	<img
		:src="logoPath"
		:alt="altText"
		:width="width"
		:height="height"
		class="rokify-logo"
	/>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
	width: {
		type: [String, Number],
		default: '117'
	},
	height: {
		type: [String, Number],
		default: '117'
	},
	altText: {
		type: String,
		default: 'Rokify Logo'
	}
})

const logoPath = computed(() => {
	// Use the asset path for the logo
	return '/assets/hrms/images/rokify-logo.svg'
})
</script>

<style scoped>
.rokify-logo {
	display: block;
}
</style>
