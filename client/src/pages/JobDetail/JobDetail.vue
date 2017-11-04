<template>
	<div>
		<TWHeadSmall></TWHeadSmall>
		<div class="row">
			<back-to-jobs></back-to-jobs>
			<job-detail :job="job"></job-detail>
		</div>
	</div>
</template>

<script>
	import BackToJobs from '@/components/BackToJobs/BackToJobs'
	import TWHeadSmall from '@/components/HeadSmall/HeadSmall'
	import JobDetail from '@/components/JobDetail/JobDetail'

	export default {
		data() {
			return {
				job: this.$store.getters.jobById(this.$route.params.id)
			}
		},
		components: {
			BackToJobs,
			TWHeadSmall,
			JobDetail
		}
	}
</script>

<style lang="scss" src="./JobDetail.scss" scoped></style>