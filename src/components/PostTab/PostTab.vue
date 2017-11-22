<template>
	<li role="presentation" class="pull-right hidden-xs">
		<router-link v-if="postType === 'jobs'" to="/job-form" class="post-tab">
		  <i class="fa fa-plus" aria-hidden="true"></i>
		  POST A JOB
		</router-link>
		<router-link v-else-if="postType === 'trimmers'" to="/trimmer-form" class="post-tab">
		  <i class="fa fa-plus" aria-hidden="true"></i>
		  POST A TRIMMER RESUME
		</router-link>
		<router-link v-else-if="postType === 'resumes'" to="/resume-form" class="post-tab">
		  <i class="fa fa-plus" aria-hidden="true"></i>
		  POST A RESUME
		</router-link>
	</li>
</template>

<script>
	export default {
		props: ['postType']
	}
</script>

<style lang="scss" src="./PostTab.scss" scoped></style>