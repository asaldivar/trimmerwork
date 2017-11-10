<template>
	<div class="job-post-preview">
		<TWHeadSmall></TWHeadSmall>
		<job-form-phase :step="'preview'"></job-form-phase>
		{{jobForm}}
		<job-detail :job="jobForm"></job-detail>
		<div class="text-center">
			<router-link to="/job-post-submit">
				<button type="button" class="btn btn-info job-post-preview__link">
					Approve!
				</button>
			</router-link>
			<br>
			<span>or</span>
			<br>
			<router-link to="/job-form">
				Edit Your Job Post
			</router-link>
		</div>
	</div>
</template>

<script>
	import TWHeadSmall from '@/components/HeadSmall/HeadSmall'
	import JobFormPhase from '@/components/JobFormPhase/JobFormPhase'
	import JobDetail from '@/components/JobDetail/JobDetail'

	export default {
		components: {
			TWHeadSmall,
			JobFormPhase,
			JobDetail
		},
		data() {
			return {
				jobForm: this.$store.getters.jobFormApplication
			}
		}
	}
</script>

<style lang="scss">
	.job-post-preview {
		padding-bottom: 50px;
		&__link {
			background-color: #4fc08d;
			border-color: #4fc08d;
			&:hover {
				background-color: #4fc08d;
				border-color: #4fc08d;
			}
		}
	}
</style>