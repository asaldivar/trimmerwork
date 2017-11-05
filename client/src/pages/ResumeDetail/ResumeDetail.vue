<template>
	<div>
		<TWHeadSmall></TWHeadSmall>
		<back-to-jobs></back-to-jobs>
		<div class="trimmer-detail col-md-12">
			<div class="col-md-8 trimmer-detail__header">
				<h1 class="trimmer-detail__header__title">{{ resume.job_title }}</h1>
				<div class="trimmer-detail__header__date">Posted {{ resume.date | daysAgo }}</div>
				<h4>{{ resume.name }}</h4>
				<div>
					<h5 class="trimmer-detail__header__location">
						<i class="fa fa-map-marker" aria-hidden="true"></i>
						{{ resume.location }}
					</h5>
				</div>
			</div>
			<div class="col-md-4 trimmer-detail__company-logo"></div>
		</div>
		<div class="trimmer-detail__metadata col-md-12">
			<div class="trimmer-detail__metadata__category">
				<i v-if="resume.job_category === 'Grow'" class="fa fa-sun-o" aria-hidden="true"></i>
				<i v-else-if="resume.job_category === 'Harvest'" class="fa fa-scissors" aria-hidden="true"></i>
				<i v-else-if="resume.job_category === 'Sales'" class="fa fa-users" aria-hidden="true"></i>
				<i v-else aria-hidden="true"></i>
				<span v-if="resume.job_category !== 'Other'">{{resume.job_category}}</span>
			</div>
		</div>
		<div class="col-md-12 trimmer-detail__description">
			<div class="trimmer-detail-description" v-html="resume.cover_letter"></div>
			<div>
				<label>Work Experience:</label>
				<div class="trimmer-detail-description" v-html="resume.work_experience"></div>
			</div>
			<div v-if="resume.additional_info">
				<label>Additional Info:</label>
				<div class="trimmer-detail-description" v-html="resume.additional_info"></div>
			</div>
			<div class="trimmer-detail__description__application">
				<label>How to contact:</label>
				<div v-html="resume.contact_info"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import moment from 'moment'

	import BackToJobs from '@/components/BackToJobs/BackToJobs'
	import TWHeadSmall from '@/components/HeadSmall/HeadSmall'

	export default {
		data() {
			return {
				resume: this.$store.getters.resumeById(this.$route.params.id)
			}
		},
		components: {
			BackToJobs,
			TWHeadSmall
		},
		filters: {
			daysAgo: function(value) {
				return moment(String(value)).fromNow()
			}
		}
	}
</script>

<style lang="scss" src="./ResumeDetail.scss" scoped></style>