<template>
	<div class="board">
		<TWHead></TWHead>
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
		  <post-tab :postType="activeTab"></post-tab>
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
				<resumes-board :resumes="resumes"></resumes-board>
			</div>
		</div>
	</div>
</template>

<script>
	import JobsBoard from '@/components/JobsBoard/JobsBoard'
	import TrimmersBoard from '@/components/TrimmersBoard/TrimmersBoard'
	import ResumesBoard from '@/components/ResumesBoard/ResumesBoard'
	import PostTab from '@/components/PostTab/PostTab'
	import TWHead from '@/components/Head/Head.vue'

	export default {
		data() {
			return {
				jobs: this.$store.getters.allJobs,
				resumes: this.$store.getters.allResumes,
			}
		},
		components: {
			JobsBoard,
			TrimmersBoard,
			ResumesBoard,
			PostTab,
			TWHead
		},
		computed: {
			activeTab() {
				return this.$store.getters.getActiveBoardTab
			}
		},
		methods: {
			setActiveTab(tab) {
				this.$store.commit('setActiveTab', tab)
			}
		}
	}
</script>