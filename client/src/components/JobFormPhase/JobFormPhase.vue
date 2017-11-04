<template>
	<div class="row">
		<div class="job-form-phase">
			<h1 v-if="step === 'create'">Create a job post</h1>
			<h1 v-else-if="step === 'preview'">Preview your job post</h1>
			<h1 v-else>Submit your job post</h1>
			<ul class="job-form-phase__list hidden-xs">
				<li class="job-form-phase__list__step" :class="{'job-form-phase__list__step--active':step === 'create'}">create</li>
				<li class="job-form-phase__list__step" :class="{'job-form-phase__list__step--active':step === 'preview'}">preview</li>
				<li class="job-form-phase__list__step" :class="{'job-form-phase__list__step--active':step === 'submit'}">submit</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['step']
	}
</script>

<style lang="scss" src="./JobFormPhase.scss" scoped></style>