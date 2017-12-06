<template>
	<div>
		<email-sign-up v-if="!cookie"></email-sign-up>
		<div v-else>
			<div class="job-detail col-sm-12 col-md-12">
				<div class="col-md-10 col-sm-10 job-detail__header">
					<h1 class="job-detail__header__title">{{ job.jobTitle }}</h1>
					<div class="job-detail__header__date">Posted {{ job.date | daysAgo }}</div>
					<h4>{{ job.companyName }}</h4>
					<div>
						<h5 class="job-detail__header__location">
							<i class="fa fa-map-marker" aria-hidden="true"></i>
							{{ job.jobLocation }}
						</h5>
					</div>
				</div>
				<div class="col-md-2 col-sm-2 job-detail__company-logo"></div>
				<save-heart :post="job"></save-heart>
			</div>
			<div class="job-detail__metadata col-sm-12 col-md-12">
				<div v-if="job.jobCategory" class="job-detail__metadata__category">
					<i v-if="job.jobCategory === 'Grow'" class="fa fa-sun-o" aria-hidden="true"></i>
					<i v-else-if="job.jobCategory === 'Harvest'" class="fa fa-scissors" aria-hidden="true"></i>
					<i v-else-if="job.jobCategory === 'Sales'" class="fa fa-users" aria-hidden="true"></i>
					<i v-else aria-hidden="true"></i>
					<span v-if="job.jobCategory !== 'Other'">{{job.jobCategory}}</span>
				</div>
				<div class="job-detail__metadata__type">
					<i class="fa fa-clock-o" aria-hidden="true"></i>
					<span>{{job.jobType}}</span>
				</div>
				<span v-if="job.jobCompensation" class="job-detail__metadata__compensation">{{job.jobCompensation}}</span>
				<div v-show="job.jobCategory === 'Grow' || job.jobCategory === 'Harvest'" class="job-detail__metadata__accommodations">
					<i class="fa fa-home" aria-hidden="true"></i>
					<span v-if="job.jobAccommodations === 'true'">Housing</span>
					<span v-else>No housing</span>
				</div>
			</div>
			<div class="col-md-12 col-sm-12 job-detail__description">
				<div class="job-detail-description" v-html="job.jobDescription"></div>
				<div class="job-detail__description__application">
					<label>How to apply:</label>
					<div v-html="job.jobApplication"></div>
				</div>
			</div>
		</div>
		<nav-carousel :resumes="filteredJobs" :page="'jobs'"></nav-carousel>
	</div>
</template>

<script>
	import moment from 'moment'

	import BackToJobs from '@/components/BackToJobs/BackToJobs'
	import TWHeadSmall from '@/components/HeadSmall/HeadSmall'
	import EmailSignUp from '@/components/EmailSignUp/Test'
	import SaveHeart from '@/components/SaveHeart/SaveHeart'
	import NavCarousel from '@/components/NavCarousel/NavCarousel'

	export default {
		data() {
			return {
				job: this.$store.getters.jobById(this.$route.params.id),
				filteredJobs : this.$store.getters.filteredJobs
			}
		},
		computed: {
			cookie() {
				return this.$store.getters.getCookie
			}
		},
		components: {
			BackToJobs,
			TWHeadSmall,
			EmailSignUp,
			SaveHeart,
			NavCarousel
		},
		filters: {
			daysAgo: function(value) {
				return moment(String(value)).fromNow()
			}
		},
		watch: {
			$route () {
				this.job = this.$store.getters.jobById(this.$route.params.id)
			}
		}
	}
</script>

<style lang="scss" src="./JobDetail.scss" scoped></style>