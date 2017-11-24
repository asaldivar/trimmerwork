<template>
	<i class="fa heart-save" :class="[saved ? 'fa-heart': 'fa-heart-o']" aria-hidden="true" @click="updateSavedPosts()"></i>
</template>

<style lang="scss" src="./SaveHeart.scss"></style>

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
				// let savedPosts = Cookies.get('savedPosts') ? JSON.parse(Cookies.get('savedPosts')) : []
				// Cookies.set('savedPosts', JSON.parse(savedPosts))

				this.$store.commit('updateSavedPosts', this.post)
			}
		}
	}
</script>