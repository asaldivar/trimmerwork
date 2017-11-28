<template>
	<div>
		<TWHeadSmall></TWHeadSmall>
		<back-to-jobs></back-to-jobs>
		<div class="trimmer-detail col-sm-12 col-md-12">
			<div class="col-md-8 col-sm-8 trimmer-detail__header">
				<h1 class="trimmer-detail__header__title">{{ trimmer.skillLevel }}-level</h1>
				<div class="trimmer-detail__header__date">Posted {{ trimmer.date | daysAgo }}</div>
				<h4>{{ trimmer.name }}</h4>
				<div>
					<h5 class="trimmer-detail__header__location">
						<i class="fa fa-map-marker" aria-hidden="true"></i>
						{{ trimmer.location }}
					</h5>
				</div>
			</div>
			<div class="col-md-4 col-sm-4 trimmer-detail__company-logo"></div>
			<save-heart :post="trimmer"></save-heart>
		</div>
		<div class="trimmer-detail__metadata col-sm-12 col-md-12">
			<div class="trimmer-detail__metadata__type">
				<i class="fa fa-clock-o" aria-hidden="true"></i>
				<span>{{trimmer.workType}}</span>
			</div>
			<div class="trimmer-detail__metadata__category" v-if="trimmer.accommodations === 'true'">
				<i class="fa fa-home" aria-hidden="true"></i>
				<span>Accommodations desired</span>
			</div>
			<div v-if="trimmer.certification === 'true'">
				<i class="fa fa-certificate" aria-hidden="true"></i>
				<span>licensed marijuana worker</span>
			</div>
			<div v-if="trimmer.references === 'true'">
				<i class="fa fa-address-book-o" aria-hidden="true"></i>
				<span>has references</span>
			</div>
		</div>
		<div class="col-md-12 col-sm-12 trimmer-detail__description">
			<div class="trimmer-detail-description" v-html="trimmer.coverLetter"></div>
			<div class="trimmer-detail__description__application">
				<label>How to contact:</label>
				<div v-html="trimmer.contact"></div>
			</div>
		</div>
		<nav-carousel :resumes="filteredResumes" :page="'trimmers'"></nav-carousel>
	</div>
</template>

<style lang="scss" src="./TrimmerDetail.scss" scoped></style>

<script>
	import moment from 'moment'
	import Cookies from 'js-cookie'

	import BackToJobs from '@/components/BackToJobs/BackToJobs'
	import TWHeadSmall from '@/components/HeadSmall/HeadSmall'
	import SaveHeart from '@/components/SaveHeart/SaveHeart'
	import NavCarousel from '@/components/NavCarousel/NavCarousel'

	export default {
		data() {
			return {
				trimmer: this.$store.getters.trimmerById(this.$route.params.id),
				filteredResumes: this.$store.getters.filteredTrimmers,
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
				this.trimmer = this.$store.getters.trimmerById(this.$route.params.id)
			}
		}
	}
</script>