<template>
	<div>
		<TWHeadSmall></TWHeadSmall>
		<job-form-phase :step="'submit'"></job-form-phase>
		<h1>STRIPE GOES HERE! :)</h1>
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