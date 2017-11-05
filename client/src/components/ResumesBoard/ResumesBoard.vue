<template>
	<ul class="trimmers">
	  <paginate name="resumes" :per="15" :list="orderedResumes" class="paginate-list">
			<li class="trimmer-post" v-for="resume in paginated('resumes')">
				<router-link class="trimmer-post__link" :to="`/resumes/${resume._id}`">
					<span class="trimmer-post__trimmer-skill">{{ resume.job_title }}</span>
					<span class="trimmer-post__trimmer-name">/ {{ resume.name }}</span>
					<span class="trimmer-post__metadata">
						<span>
							<i class="fa fa-map-marker" aria-hidden="true"></i>
							{{ resume.location }}
						</span>
						<span class="trimmer-post__metadata__date">
							<span class="hidden-xs">-</span>
							{{ resume.date | formatDate }}
						</span>
					</span>
				</router-link>
			</li>
	  </paginate>
	  <paginate-links for="resumes" :limit="5" :show-step-links="true"></paginate-links>
	</ul>
</template>

<script>
	import moment from 'moment'
	import _ from 'lodash'

	export default {
		data() {
			return {
				resumes: this.$store.getters.allResumes,
				paginate: ['resumes']
			}
		},
		filters: {
			formatDate: (value) => {
				return moment(String(value)).format('D MMM')
			}
		},
		computed: {
			orderedResumes() {
				return orderByDate(this.resumes)
			}
		}
	}

	function orderByDate(items) {
		return _.orderBy(items, 'date', 'desc')
	}
</script>

<style lang="scss" src="./ResumesBoard.scss" scoped></style>
<!-- styles won't render if placed in TrimmersBoard.scss -->
<style lang="scss">
	.paginate-list {
		padding: 0;
	}
	.paginate-links.resumes {
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