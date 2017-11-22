<template>
	<ul class="job-posts-container">
		<job-board-item :jobs="jobs"></job-board-item>
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
		}
	}
</script>

<style lang="scss" src="./JobsBoard.scss" scoped></style>