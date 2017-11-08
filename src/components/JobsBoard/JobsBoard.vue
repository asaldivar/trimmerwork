<template>
	<ul class="job-posts-container">
		<li class="job-post" v-for="job in orderedJobs">
			<router-link class="job-post__link" :to="`/jobs/${job._id}`">
				<span class="job-post__job-title">{{ job.jobTitle }}</span>
				<span class="job-post__company-name">@ {{ job.companyName }}</span>
				<span class="job-post__metadata">
					<span>
						<i class="fa fa-map-marker" aria-hidden="true"></i>
						{{ job.jobLocation }}
					</span>
					<span class="job-post__metadata__date">
						<span class="hidden-xs">-</span>
						{{ job.date | formatDate }}
					</span>
				</span>
			</router-link>
		</li>
	</ul>
</template>

<script>
	import moment from 'moment'
	import _ from 'lodash'

	export default {
		props: ['jobs'],
		filters: {
			formatDate: (value) => {
				return moment(String(value)).format('D MMM')
			}
		},
		computed: {
			orderedJobs() {
				return orderByDate(this.jobs)
			}
		}
	}

	function orderByDate(items) {
		return _.orderBy(items, 'date', 'desc')
	}
</script>

<style lang="scss" src="./JobsBoard.scss" scoped></style>