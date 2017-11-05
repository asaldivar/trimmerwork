<template>
	<div>
		<TWHeadSmall></TWHeadSmall>
		<job-form-phase :step="'submit'"></job-form-phase>
		<h5>STRIPE GOES HERE! :)</h5>
		<div class="job-post-submit">
			<h5>By creating a new job post you agree with:</h5>
			<p>I am a part of / I represent the hiring company. Details provided above refer to the actual hiring entity.</p>
		</div>
	</div>
</template>

<script>
	import TWHeadSmall from '@/components/HeadSmall/HeadSmall'
	import JobFormPhase from '@/components/JobFormPhase/JobFormPhase'

	export default {
		components: {
			TWHeadSmall,
			JobFormPhase
		}
	}
</script>

<style lang="scss">
	.job-post-submit {
		background-color: #ddd;
    padding: 10px 15px;
    border-radius: 4px;
	}
</style>