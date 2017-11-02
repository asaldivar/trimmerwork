<template>
	<div class="board">
		<!-- boad navigation -->
		<ul class="nav nav-tabs">
		  <li role="presentation" :class="{'active': activeTab === 'jobs'}">
		  	<a class="navigation" href="#jobs" aria-controls="jobs" role="tab" data-toggle="tab" @click="setActiveTab('jobs')">JOBS</a>
		  </li>
		  <li role="presentation" :class="{'active': activeTab === 'trimmers'}">
		  	<a class="navigation" href="#trimmers" aria-controls="trimmers" role="tab" data-toggle="tab" @click="setActiveTab('trimmers')">TRIMMERS</a>
		  </li>
		  <li role="presentation" :class="{'active': activeTab === 'resumes'}">
		  	<a class="navigation" href="#resumes" aria-controls="resumes" role="tab" data-toggle="tab" @click="setActiveTab('resumes')">RESUMES</a>
		  </li>
		  <!-- post a <job, trimmer resume, resume button -->
		  <post-tab></post-tab>
		</ul>
		<!-- board content -->
		<div class="tab-content">
			<div id="jobs" class="tab-pane" role="tabpanel" :class="{'active': activeTab === 'jobs'}">
				<jobs-board :jobs="jobs"></jobs-board>
			</div>
			<div id="trimmers" class="tab-pane" role="tabpanel" :class="{'active': activeTab === 'trimmers'}">
				<trimmers-board></trimmers-board>
			</div>
			<div id="resumes" class="tab-pane" role="tabpanel" :class="{'active': activeTab === 'resumes'}">
				<resumes-board></resumes-board>
			</div>
		</div>
	</div>
</template>

<script>
	import JobsBoard from '../components/JobsBoard/JobsBoard.vue'
	import TrimmersBoard from '../components/TrimmersBoard/TrimmersBoard.vue'
	import ResumesBoard from '../components/ResumesBoard/ResumesBoard.vue'
	import PostTab from '../components/PostTab/PostTab.vue'

	export default {
		data() {
			return {
				jobs: this.$store.getters.allJobs,
				activeTab: this.$store.getters.getActiveBoardTab
			}
		},
		components: {
			JobsBoard,
			TrimmersBoard,
			ResumesBoard,
			PostTab
		},
		methods: {
			setActiveTab(tab) {
				this.$store.commit('setActiveTab', tab)
			}
		}
	}
</script>