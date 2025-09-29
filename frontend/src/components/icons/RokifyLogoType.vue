<template>
	<div class="rokify-logo-type">
		<img
			:src="logoPath"
			:alt="altText"
			:width="width"
			:height="height"
			class="logo-icon"
		/>
		<span class="logo-text">ROKIFY</span>
	</div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
	width: {
		type: [String, Number],
		default: '116'
	},
	height: {
		type: [String, Number],
		default: '30'
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
.rokify-logo-type {
	display: flex;
	align-items: center;
	gap: 8px;
}

.logo-icon {
	width: 30px;
	height: 30px;
	border-radius: 4px;
	background: currentColor;
	padding: 4px;
}

.logo-text {
	font-family: Arial, sans-serif;
	font-size: 14px;
	font-weight: bold;
	color: currentColor;
}
</style>
