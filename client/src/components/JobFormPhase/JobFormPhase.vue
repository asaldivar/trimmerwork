<template>
	<ul class="job-form-phase hidden-xs">
		<li class="job-form-phase__step" :class="{'job-form-phase__step--active':step === 'create'}">create</li>
		<li class="job-form-phase__step" :class="{'job-form-phase__step--active':step === 'preview'}">preview</li>
		<li class="job-form-phase__step" :class="{'job-form-phase__step--active':step === 'submit'}">submit</li>
	</ul>
</template>

<script>
	export default {
		props: ['step']
	}
</script>

<style lang="scss" src="./JobFormPhase.scss" scoped></style>