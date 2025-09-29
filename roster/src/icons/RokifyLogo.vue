<template>
	<img
		:src="logoPath"
		:alt="altText"
		:width="width"
		:height="height"
		class="rokify-logo"
	/>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
	width?: string | number
	height?: string | number
	altText?: string
}

const props = withDefaults(defineProps<Props>(), {
	width: '117',
	height: '117',
	altText: 'Rokify Logo'
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
