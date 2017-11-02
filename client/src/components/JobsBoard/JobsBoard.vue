<template>
	<ul>
		<li class="job-post" v-for="job in jobs">
			<router-link
				class="job-link"
				:to="`/jobs/${job._id}`"
			>
				<span class="job-title">{{ job.job_title }}</span>
				<span class="company-name">@ {{ job.company_name }}</span>
				<span class="job-metadata">
					<span>
						<i class="fa fa-map-marker" aria-hidden="true"></i>
						{{ job.job_location }}
					</span>
					<span class="post-date">
						<span class="hidden-xs">-</span>
						{{ job.date }}
					</span>
				</span>
			</router-link>
		</li>
	</ul>
</template>

<script>
	export default {
		props: ['jobs']
	}
</script>