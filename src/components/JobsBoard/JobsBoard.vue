<template>
	<ul class="job-posts-container">
	  <paginate name="jobs" :per="15" :list="orderedJobs" class="paginate-list">

			<li class="job-post" v-for="job in paginated('jobs')">
				<job-board-item :job="job"></job-board-item>
			</li>

	  </paginate>
	  <paginate-links for="jobs" :limit="5" :show-step-links="true"></paginate-links>
	</ul>
</template>

<style lang="scss">
	.paginate-list {
		padding: 0;
	}
	.paginate-links.jobs {
	  text-align: center;
	  user-select: none;
	  li {
	  	display: inline-block;
	  	margin: 0 10px;
	  }
	  a {
	    cursor: pointer;
	  }
	  li.active a {
	    font-weight: bold;
	  }
	  li.next:before {
	    content: ' | ';
	    margin-right: 13px;
	    color: #ddd;
	  }
	  li.disabled a {
	    color: #ccc;
	    cursor: no-drop;
	  }
		a {
		  color: #4fc08d;
		}
	}
</style>

<script>
	import moment from 'moment'
	import _ from 'lodash'

	import JobBoardItem from '@/components/JobBoardItem/JobBoardItem'

	export default {
		props: ['jobs'],
		data() {
			return {
				paginate: ['jobs']
			}
		},
		components: {
			JobBoardItem
		},
		computed: {
			orderedJobs() {
				return orderByDate(this.jobs)
			}
		}
	}

	function orderByDate(jobs) {
		jobs.map(item => {
			item.date = moment(item.date).toISOString()
			return item
		})
		return _.orderBy(jobs, 'date', 'desc')
	}
</script>

<style lang="scss" src="./JobsBoard.scss" scoped></style>