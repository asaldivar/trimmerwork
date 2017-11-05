<template>
	<ul class="trimmers">
	  <paginate name="trimmers" :per="25" :list="orderedTrimmers" class="paginate-list">
			<li class="trimmer-post" v-for="trimmer in paginated('trimmers')">
				<router-link class="trimmer-post__link" :to="`/trimmers/${trimmer._id}`">
					<span class="trimmer-post__trimmer-skill">{{ trimmer.skill_level }}-level</span>
					<span class="trimmer-post__trimmer-name">/ {{ trimmer.trimmer_name }}</span>
					<span class="trimmer-post__metadata">
						<span>
							<i class="fa fa-map-marker" aria-hidden="true"></i>
							{{ trimmer.trimmer_location }}
						</span>
						<span class="trimmer-post__metadata__date">
							<span class="hidden-xs">-</span>
							{{ trimmer.date | formatDate }}
						</span>
					</span>
				</router-link>
			</li>
	  </paginate>
	  <paginate-links for="trimmers" :limit="5" :show-step-links="true"></paginate-links>
	</ul>
</template>

<script>
	import moment from 'moment'
	import _ from 'lodash'

	export default {
		data() {
			return {
				trimmers: this.$store.getters.allTrimmers,
				paginate: ['trimmers']
			}
		},
		filters: {
			formatDate: (value) => {
				return moment(String(value)).format('D MMM')
			}
		},
		computed: {
			orderedTrimmers() {
				return orderByDate(this.trimmers)
			}
		}
	}

	function orderByDate(items) {
		return _.orderBy(items, 'date', 'desc')
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