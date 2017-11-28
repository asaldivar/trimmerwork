<template>
	<div class="col-md-12 col-sm-12 post-detail__navigation">
		<router-link v-if="previousResume" :to="`/${page}/${previousResume._id}`" class="pull-left post-detail__navigation__left">
			<i class="fa fa-long-arrow-left" aria-hidden="true"></i>
			<span>previous</span>
		</router-link>
		<router-link v-if="nextResume" :to="`/${page}/${nextResume._id}`" class="pull-right post-detail__navigation__right">
			<span>next</span>
			<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
		</router-link>
	</div>
</template>

<style lang="scss" src="./NavCarousel.scss" scoped></style>

<script>
	export default {
		props: ['resumes', 'page'],
		computed: {
			currentResumeIndex() {
				return this.resumes.map(function(post) {
					return post._id
				}).indexOf(this.$route.params.id)
			},
			previousResume() {
				return this.resumes[this.currentResumeIndex - 1]
			},
			nextResume() {
				return this.resumes[this.currentResumeIndex + 1]
			}
		}
	}
</script>