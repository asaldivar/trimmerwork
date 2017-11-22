<template>
	<div>
		<li class="trimmer-board-item" v-for="trimmer in trimmers">
			<router-link class="trimmer-board-item__link" :to="`/trimmers/${trimmer._id}`">
				<span class="trimmer-board-item__trimmer-skill">{{ trimmer.skillLevel }}-level</span>
				<span class="trimmer-board-item__trimmer-name">/ {{ trimmer.name }}</span>
				<span class="trimmer-board-item__metadata">
					<span>
						<i class="fa fa-map-marker" aria-hidden="true"></i>
						{{ trimmer.location }}
					</span>
					<span class="trimmer-board-item__metadata__date">
						<span class="hidden-xs">-</span>
						{{ trimmer.date | formatDate }}
					</span>
				</span>
			</router-link>
		</li>
		</div>
</template>

<style lang="scss" src="./TrimmerBoardItem.scss"></style>

<script>
	import moment from 'moment'

	export default {
		props: ['trimmers'],
		filters: {
			formatDate: (value) => {
				return moment(String(value)).format('D MMM')
			}
		}
	}
</script>