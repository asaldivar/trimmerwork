<template>
	<div>
		<TWHeadSmall></TWHeadSmall>
		<back-to-jobs></back-to-jobs>
		<div class="resume-detail col-md-12">
			<div class="col-md-8 resume-detail__header">
				<h1 class="resume-detail__header__title">{{ resume.title }}</h1>
				<div class="resume-detail__header__date">Posted {{ resume.date | daysAgo }}</div>
				<h4>{{ resume.name }}</h4>
				<div>
					<h5 class="resume-detail__header__location">
						<i class="fa fa-map-marker" aria-hidden="true"></i>
						{{ resume.location }}
					</h5>
				</div>
			</div>
			<div class="col-md-4 resume-detail__company-logo"></div>
			<save-heart :post="resume"></save-heart>
		</div>
		<div class="resume-detail__metadata col-md-12">
			<div class="resume-detail__metadata__category">
				<i v-if="resume.jobCategory === 'Grow'" class="fa fa-sun-o" aria-hidden="true"></i>
				<i v-else-if="resume.jobCategory === 'Harvest'" class="fa fa-scissors" aria-hidden="true"></i>
				<i v-else-if="resume.jobCategory === 'Sales'" class="fa fa-users" aria-hidden="true"></i>
				<i v-else class="fa fa-random" aria-hidden="true"></i>
				<span>{{resume.jobCategory || 'Other'}}</span>
			</div>
			<div v-if="resume.references === 'true'">
				<i class="fa fa-address-book-o" aria-hidden="true"></i>
				<span>has references</span>
			</div>
		</div>
		<div class="col-md-12 resume-detail__description">
			<div class="resume-detail-description" v-html="resume.coverLetter"></div>
			<div>
				<label>Work Experience:</label>
				<div class="resume-detail-description" v-html="resume.experience"></div>
			</div>
			<div v-if="resume.additionalInfo">
				<label>Additional Info:</label>
				<div class="resume-detail-description" v-html="resume.additionalInfo"></div>
			</div>
			<div class="resume-detail__description__application">
				<label>How to contact:</label>
				<div v-html="resume.contact"></div>
			</div>
		</div>
		<nav-carousel :resumes="filteredResumes" :page="'resumes'"></nav-carousel>
	</div>
</template>

<style lang="scss" src="./ResumeDetail.scss" scoped></style>

<script>
	import moment from 'moment'

	import BackToJobs from '@/components/BackToJobs/BackToJobs'
	import TWHeadSmall from '@/components/HeadSmall/HeadSmall'
	import SaveHeart from '@/components/SaveHeart/SaveHeart'
	import NavCarousel from '@/components/NavCarousel/NavCarousel'

	export default {
		data() {
			return {
				resume: this.$store.getters.resumeById(this.$route.params.id),
				filteredResumes: this.$store.getters.filteredResumes
			}
		},
		components: {
			BackToJobs,
			TWHeadSmall,
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
				this.resume = this.$store.getters.resumeById(this.$route.params.id)
			}
		}
	}
</script>