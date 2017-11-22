<template>
	<div class="trimmers-board">
		<trimmer-board-item :trimmers="savedPosts"></trimmer-board-item>
	</div>
</template>

<script>
	import moment from 'moment'

	import TrimmerBoardItem from '@/components/TrimmerBoardItem/TrimmerBoardItem'

	export default {
		props: ['savedPosts'],
		components: {
			TrimmerBoardItem
		}
	}
</script>
