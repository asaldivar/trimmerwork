<template>
	<div>
		<div class="job-detail row">
			<back-to-jobs></back-to-jobs>
			<div class="col-md-8 job-detail__header">
				<h1 class="job-detail__header__title">{{ job.job_title }}</h1>
				<div class="job-detail__header__date">Posted {{ job.date | daysAgo }}</div>
				<h4>{{ job.company_name }}</h4>
				<div>
					<h5 class="job-detail__header__location">
						<i class="fa fa-map-marker" aria-hidden="true"></i>
						{{ job.job_location }}
					</h5>
				</div>
			</div>
			<div class="col-md-4 job-detail__company-logo"></div>
		</div>
		<div class="job-detail__metadata row">
			<div class="job-detail__metadata__category">
				<i v-if="job.job_category === 'Grow'" class="fa fa-sun-o" aria-hidden="true"></i>
				<i v-else-if="job.job_category === 'Harvest'" class="fa fa-scissors" aria-hidden="true"></i>
				<i v-else-if="job.job_category === 'Sales'" class="fa fa-users" aria-hidden="true"></i>
				<i v-else aria-hidden="true"></i>
				<span v-if="job.job_category !== 'Other'">{{job.job_category}}</span>
			</div>
			<div class="job-detail__metadata__type">
				<i class="fa fa-clock-o" aria-hidden="true"></i>
				<span>{{job.job_type}}</span>
			</div>
			<span class="job-detail__metadata__compensation">{{job.job_compensation}}</span>
			<div v-show="job.job_category === 'Grow' || job.job_category === 'Harvest'" class="job-detail__metadata__accommodations">
				<i class="fa fa-home" aria-hidden="true"></i>
				<span v-if="job.job_accommodations === 'true'">Housing</span>
				<span v-else>No housing</span>
			</div>
		</div>
		<div class="row job-detail__description">
			<div class="job-detail-description" v-html="job.job_description"></div>
			<div class="job-detail__description__application">
				<label>How to apply:</label>
				<div v-html="job.job_application"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import moment from 'moment'
	import BackToJobs from '@/components/BackToJobs/BackToJobs'

	export default {
		data() {
			return {
				job: this.$store.getters.jobById(this.$route.params.id)
			}
		},
		components: {
			BackToJobs
		},
		filters: {
			daysAgo: function(value) {
				return moment(String(value)).fromNow()
			}
		}
	}
</script>

<style lang="scss" src="./JobDetail.scss" scoped></style>