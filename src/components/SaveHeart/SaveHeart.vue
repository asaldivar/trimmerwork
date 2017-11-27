<template>
	<i class="fa heart-save hidden-xs" :class="[saved ? 'fa-heart heart-save--red': 'fa-heart-o']" aria-hidden="true" @click="updateSavedPosts()"></i>
</template>

<style lang="scss" src="./SaveHeart.scss" scoped></style>

<script>
	export default {
		props: ['post'],
		computed: {
			saved() {
				return this.$store.getters.savedById(this.$route.params.id)
			}
		},
		methods: {
			updateSavedPosts() {
				this.$store.commit('updateSavedPosts', this.post)
			}
		}
	}
</script>