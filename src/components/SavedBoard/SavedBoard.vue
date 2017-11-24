<template>
	<ul class="saved-board">
		<p v-if="savedPosts.length < 1" class="saved-board__message">
			Improve your recruitment or job search efforts by saving your favorite posts. Favorited posts will appear here so you can quickly work through them.
		</p>
		<li v-else class="saved-board__post" v-for="post in savedPosts">
			<job-board-item v-if="post.hasOwnProperty('companyName')" :job="post"></job-board-item>
			<trimmer-board-item v-else-if="post.hasOwnProperty('skillLevel')" :trimmer="post"></trimmer-board-item>
			<resume-board-item v-else :resume="post"></resume-board-item>
		</li>
	</ul>
</template>

<script>
	import moment from 'moment'

	import JobBoardItem from '@/components/JobBoardItem/JobBoardItem'
	import TrimmerBoardItem from '@/components/TrimmerBoardItem/TrimmerBoardItem'
	import ResumeBoardItem from '@/components/ResumeBoardItem/ResumeBoardItem'

	export default {
		props: ['savedPosts'],
		components: {
			JobBoardItem,
			TrimmerBoardItem,
			ResumeBoardItem
		}
	}
</script>

<style lang="scss" scoped>
	.saved-board {
		padding: 0;
		&__message {
			text-align: center;
			padding:	20px 0;
		}
		&__post {
			padding: 10px 0;
			list-style-type: none;
			&:hover {
				background-color: rgba(79,192,141	,0.1);
			}
			&:not(:last-child) {
				border-bottom: 1px solid #ddd;
			}
		}
	}
</style>