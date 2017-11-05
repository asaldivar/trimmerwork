<template>
	<div>
		<TWHeadSmall></TWHeadSmall>
		<back-to-jobs></back-to-jobs>
		<div class="trimmer-detail col-md-12">
			<div class="col-md-8 trimmer-detail__header">
				<h1 class="trimmer-detail__header__title">{{ trimmer.skill_level }}-level</h1>
				<div class="trimmer-detail__header__date">Posted {{ trimmer.date | daysAgo }}</div>
				<h4>{{ trimmer.trimmer_name }}</h4>
				<div>
					<h5 class="trimmer-detail__header__location">
						<i class="fa fa-map-marker" aria-hidden="true"></i>
						{{ trimmer.trimmer_location }}
					</h5>
				</div>
			</div>
			<div class="col-md-4 trimmer-detail__company-logo"></div>
		</div>
		<div class="trimmer-detail__metadata col-md-12">
			<div class="trimmer-detail__metadata__category" v-if="trimmer.accommodations === 'true'">
				<i class="fa fa-home" aria-hidden="true"></i>
				<span>Accommodations desired</span>
			</div>
			<div class="trimmer-detail__metadata__type">
				<i class="fa fa-clock-o" aria-hidden="true"></i>
				<span>{{trimmer.work_type}}</span>
			</div>
		</div>
		<div class="col-md-12 trimmer-detail__description">
			<div class="trimmer-detail-description" v-html="trimmer.cover_letter"></div>
			<div class="trimmer-detail__description__application">
				<label>How to contact:</label>
				<div v-html="trimmer.trimmer_contact"></div>
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
				trimmer: this.$store.getters.trimmerById(this.$route.params.id)
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

<style lang="scss" src="./TrimmerDetail.scss" scoped></style>