<template>
	<ul class="trimmers-board">
		<!-- filters -->
		<div class="input-group trimmers-board__filters">
			<input type="text" class="form-control" v-model="trimmerFilterSettings['search']" placeholder="search location">
		  <span class="input-group-btn">
		    <button class="btn btn-default" type="button" @click="toggleFilter">
		    	Filters
		  	</button>
		    <button class="btn btn-default" type="button" @click="resetFilters">
		    	<i class="fa fa-ban" aria-hidden="true"></i>
		  	</button>
		  </span>
	  </div>
		<div class="form-group" v-show="trimmerFilterSettings['filtersOn']">
			<select class="form-control" id="job_category" v-model="trimmerFilterSettings['skillLevel']">
				<option value="all" selected="All">All skill levels</option>
				<option value="Entry">Entry-level</option>
				<option value="Mid">Mid-level</option>
				<option value="Senior">Senior-level</option>
			</select>
			<div class="checkbox">
				<label for="certification-filter">
					<input id="certification-filter" type="checkbox" v-model="trimmerFilterSettings['isCertified']">
					<i class="fa fa-certificate" aria-hidden="true"></i>
					Has certification(s)
				</label>
			</div>
			<div class="checkbox">
				<label for="accommodations-filter">
					<input id="accommodations-filter" type="checkbox" v-model="trimmerFilterSettings['wantsAccommodations']">
						<i class="fa fa-home" aria-hidden="true"></i>
						Requests accommodations
				</label>
			</div>
			<div class="checkbox">
				<label for="references-filter">
					<input id="references-filter" type="checkbox" v-model="trimmerFilterSettings['hasReferences']">
						<i class="fa fa-address-book" aria-hidden="true"></i>
						Has references
				</label>
			</div>
		</div>
	  <!-- li items paginated -->
	  <paginate name="trimmers" :per="15" :list="orderedAndFilteredTrimmers" class="paginate-list">
			<li class="trimmers-board__post" v-for="trimmer in paginated('trimmers')">
				<trimmer-board-item :trimmer="trimmer"></trimmer-board-item>
			</li>
	  </paginate>
	  <paginate-links for="trimmers" :limit="5" :show-step-links="true"></paginate-links>
	</ul>
</template>

<script>
	import moment from 'moment'
	import _ from 'lodash'

	import TrimmerBoardItem from '@/components/TrimmerBoardItem/TrimmerBoardItem'

	export default {
		components: {
			TrimmerBoardItem
		},
		data() {
			return {
				trimmers: this.$store.getters.allTrimmers,
				trimmerFilterSettings: this.$store.getters.allSettings,
				paginate: ['trimmers']
			}
		},
		// async created() {
		// 	try {
		// 		await this.$store.dispatch('getTrimmers')
		// 	} catch(e) {
		// 		console.warn(e)
		// 	}
		// },
		filters: {
			formatDate: (value) => {
				return moment(String(value)).format('D MMM')
			}
		},
		computed: {
			// trimmers() {
			// 	return this.$store.getters.allTrimmers
			// },
			orderedAndFilteredTrimmers() {
				let orderedTrimmers = orderByDate(this.trimmers)
				let filteredResumes = filterBySkillLevel(filterByLocation(orderedTrimmers, this.trimmerFilterSettings['search']), this.trimmerFilterSettings['skillLevel'])

				if (this.trimmerFilterSettings['isCertified']) {
					filteredResumes = filterByMetadata('certification', filteredResumes)
				}
				if (this.trimmerFilterSettings['wantsAccommodations']) {
					filteredResumes = filterByMetadata('accommodations', filteredResumes)
				}
				if (this.trimmerFilterSettings['hasReferences']) {
					filteredResumes = filterByMetadata('references', filteredResumes)
				}

				this.$store.commit('setFilteredTrimmers', filteredResumes)

				return filteredResumes
			}
		},
		methods: {
			resetFilters() {
				this.$store.commit('resetTrimmerFilterSettings')
			},
			toggleFilter() {
				this.$store.commit('toggleFilter', 'trimmerFilterSettings')
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
	function filterBySkillLevel(resumes, skillLevel) {
		if (skillLevel === 'all') return resumes

		return resumes.filter(resume => resume.skillLevel === skillLevel)
	}
	function filterByMetadata(metadata, resumes) {
		return resumes.filter(resume => {
			return resume[metadata] == 'true'
		})
	}
</script>

<style lang="scss" src="./TrimmersBoard.scss" scoped></style>
<!-- styles won't render if placed in TrimmersBoard.scss -->
<style lang="scss">
	.paginate-list {
		padding: 0;
	}
	.paginate-links.trimmers {
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