<template>
	<div>
		<TWHead></TWHead>
		<div class="text-center choose-form">
			<router-link to="/job-form" class="choose-form__button">
				POST A JOB
			</router-link>
			<h5>or</h5>
			<router-link to="/trimmer-form" class="choose-form__button">
				POST A TRIMMER RESUME
			</router-link>
			<h5>or</h5>
			<router-link to="/resume-form" class="choose-form__button">
				POST A NON-TRIMMER RESUME
			</router-link>
		</div>
	</div>
</template>

<script>
	import TWHead from '@/components/Head/Head.vue'

	export default {
		components: {
			TWHead
		}
	}
</script>

<style lang="scss">
	.choose-form {
		margin-top: 40px;
		min-height: 475px;
		&__button {
			padding: 5px 15px;
			line-height: 1.4;
			color: #ff0000;
	    border: 1px solid #ff0000;
	    border-radius: 3px;
		}
	}
</style>