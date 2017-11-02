<template>
	<div class="board col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-12">
		<!-- boad navigation -->
		<ul class="nav nav-tabs">
		  <li role="presentation">
		  	<a class="navigation" href="#jobs" aria-controls="jobs" role="tab" data-toggle="tab">JOBS</a>
		  </li>
		  <li role="presentation">
		  	<a class="navigation" href="#trimmers" aria-controls="trimmers" role="tab" data-toggle="tab">TRIMMERS</a>
		  </li>
		  <li role="presentation">
		  	<a class="navigation" href="#resumes" aria-controls="resumes" role="tab" data-toggle="tab">RESUMES</a>
		  </li>
		</ul>
		<!-- board content -->
		<div class="tab-content">
			<div id="jobs" class="tab-pane" role="tabpanel">
				<jobs-board></jobs-board>
			</div>
			<div id="trimmers" class="tab-pane" role="tabpanel">
				<trimmers-board></trimmers-board>
			</div>
			<div id="resumes" class="tab-pane" role="tabpanel">
				<resumes-board></resumes-board>
			</div>
		</div>
	</div>
</template>

<script>
	import JobsBoard from '../components/JobsBoard/JobsBoard.vue'
	import TrimmersBoard from '../components/TrimmersBoard/TrimmersBoard.vue'
	import ResumesBoard from '../components/ResumesBoard/ResumesBoard.vue'

	export default {
		components: {
			JobsBoard,
			TrimmersBoard,
			ResumesBoard
		}
	}
</script>