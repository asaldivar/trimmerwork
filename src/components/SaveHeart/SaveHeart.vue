<template>
	<i class="fa heart-save" :class="[saved ? 'fa-heart': 'fa-heart-o']" aria-hidden="true" @click="savePost()"></i>
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
			savePost() {
				// let savedPosts = Cookies.get('savedPosts') ? JSON.parse(Cookies.get('savedPosts')) : []
				// savedPosts.push(this.trimmer)
				// console.log(savedPosts)
				// Cookies.set('savedPosts', JSON.parse(savedPosts))
				// console.log("Cookies.get('savedPosts'):",Cookies.get('savedPosts'))
				this.$store.commit('savePost', this.trimmer)
				// console.log(this.$store.getters.savedPosts)
			}
		}
	}
</script>