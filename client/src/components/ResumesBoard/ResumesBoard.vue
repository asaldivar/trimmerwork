<template>
	<ul class="resumes-board">
		<!-- filters -->
		<div class="input-group resumes-board__filters">
			<input type="text" class="form-control" v-model="resumeFilterSettings['search']" placeholder="search location">
		  <span class="input-group-btn">
		    <button class="btn btn-default" type="button" @click="resetFilters">
		    	<i class="fa fa-ban" aria-hidden="true"></i>
		  	</button>
		  </span>
	  </div>


		<div class="btn-group btn-group-justified" role="group">
			<div class="btn-group" role="group">
				<button
					class="btn btn-default btn-sm"
					:class="{active: this.resumeFilterSettings['jobCategory'] === 'Grow'}"
					@click="setJobCategory('Grow')">
					Grow
				</button>
			</div>
			<div class="btn-group" role="group">
				<button
					class="btn btn-default btn-sm"
					:class="{active: this.resumeFilterSettings['jobCategory'] === 'Harvest'}"
					@click="setJobCategory('Harvest')">
					Harvest
				</button>
			</div>
			<div class="btn-group" role="group">
				<button
					class="btn btn-default btn-sm"
					:class="{active: this.resumeFilterSettings['jobCategory'] === 'Sales'}"
					@click="setJobCategory('Sales')">
					Sales
				</button>
			</div>
			<div class="btn-group" role="group">
				<button
					class="btn btn-default btn-sm"
					:class="{active: this.resumeFilterSettings['jobCategory'] === 'Other'}"
					@click="setJobCategory('Other')">
					Other
				</button>
			</div>
		</div>


		<!-- li items paginated -->
	  <paginate name="resumes" :per="15" :list="orderedandFilteredResumes" class="paginate-list">
			<li class="resumes-board__post" v-for="resume in paginated('resumes')">
				<router-link class="resumes-board__post__link" :to="`/resumes/${resume._id}`">
					<span class="resumes-board__post__job-title">{{ resume.job_title }}</span>
					<span class="resumes-board__post__name">/ {{ resume.name }}</span>
					<span class="resumes-board__post__metadata">
						<span>
							<i class="fa fa-map-marker" aria-hidden="true"></i>
							{{ resume.location }}
						</span>
						<span class="resumes-board__post__metadata__date">
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
				resumeFilterSettings: this.$store.getters.allResumeSettings,
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
			orderedandFilteredResumes() {
				let orderedResumes = orderByDate(this.resumes)
				let filteredResumes = filterByLocation(orderedResumes, this.resumeFilterSettings['search'])

				if (this.resumeFilterSettings['jobCategory']) {
					filteredResumes = filterByJobCategory(filteredResumes, this.resumeFilterSettings['jobCategory'])
				}

				return filteredResumes
			}
		},
		methods: {
			resetFilters() {
				this.$store.commit('resetResumeFilterSettings')
			},
			toggleFilter() {
				this.$store.commit('toggleFilter', 'resumeFilterSettings')
			},
			setJobCategory(category) {
				this.resumeFilterSettings['jobCategory'] = category
			}
		}
	}

	function orderByDate(items) {
		return _.orderBy(items, 'date', 'desc')
	}
	function filterByLocation(resumes, userLocationInput) {
		if (!userLocationInput) return resumes

		const search = userLocationInput.trim().toLowerCase()
		return resumes.filter(resume => {
			return resume.location.toLowerCase().match(search)
		})
	}
	function filterByJobCategory(resumes, category) {
		return resumes.filter(resume => resume.job_category === category)
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
	.btn:focus,.btn:active {
	   outline: none !important;
	}
</style>