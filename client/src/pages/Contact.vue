<template>
	<div class="contact">
		<TWHeadSmall></TWHeadSmall>
		<h3>Contact</h3>
		<p>
			Have a question?
		</p>
		<p>
			Want to tell us how you're feeling?
		</p>
		<p>
			Please feel free to reach out to us at, <strong>cs@trimmerwork.com</strong>.
		</p>
	</div>
</template>

<script>
	import TWHeadSmall from '@/components/HeadSmall/HeadSmall'

	export default {
		components: {
			TWHeadSmall
		}
	}
</script>

<style lang="scss">
	.contact {
		min-height: 475px;
	}
</style>