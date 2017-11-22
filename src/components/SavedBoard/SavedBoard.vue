<template>
	<div class="trimmers-board">
		<li class="trimmers-board__post" v-for="trimmer in savedPosts">
			<router-link class="trimmers-board__post__link" :to="`/trimmers/${trimmer._id}`">
				<span class="trimmers-board__post__trimmer-skill">{{ trimmer.skillLevel }}-level</span>
				<span class="trimmers-board__post__trimmer-name">/ {{ trimmer.name }}</span>
				<span class="trimmers-board__post__metadata">
					<span>
						<i class="fa fa-map-marker" aria-hidden="true"></i>
						{{ trimmer.location }}
					</span>
					<span class="trimmers-board__post__metadata__date">
						<span class="hidden-xs">-</span>
						{{ trimmer.date | formatDate }}
					</span>
				</span>
			</router-link>
		</li>
	</div>
</template>

<script>
	import moment from 'moment'

	export default {
		props: ['savedPosts'],
		filters: {
			formatDate: (value) => {
				return moment(String(value)).format('D MMM')
			}
		}
	}
</script>

<style lang="scss" src="./SavedBoard.scss"></style>