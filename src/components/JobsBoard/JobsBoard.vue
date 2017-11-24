<template>
	<ul class="job-posts-container">
		<li class="job-post" v-for="job in orderedJobs">
			<job-board-item :job="job"></job-board-item>
		</li>
	</ul>
</template>

<script>
	import moment from 'moment'
	import _ from 'lodash'

	import JobBoardItem from '@/components/JobBoardItem/JobBoardItem'

	export default {
		props: ['jobs'],
		components: {
			JobBoardItem
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