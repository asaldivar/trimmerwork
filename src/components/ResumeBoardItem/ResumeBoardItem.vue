<template>
	<router-link class="resumes-board__post__link" :to="`/resumes/${resume._id}`">
		<span class="resumes-board__post__job-title">{{ resume.title }}</span>
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
</template>

<style lang="scss" src="./ResumeBoardItem.scss" scoped></style>

<script>
	import moment from 'moment'

	export default {
		props: ['resume'],
		filters: {
			formatDate: (value) => {
				return moment(String(value)).format('D MMM')
			}
		}
	}
</script>