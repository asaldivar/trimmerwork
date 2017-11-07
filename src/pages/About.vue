<template>
	<div class="about">
		<TWHeadSmall></TWHeadSmall>
		<h3>About</h3>
		<p class="about__text">
			<strong>TrimmerWork</strong> was created with the goal of bringing visibility to jobs within the cannabis industry. With our service, we strive to untie the hands of marijuana companies who struggle to find quality employees. Likewise, we want potential trimmers, growers, and sales employees to be more easily aware of all the opportunities available in the industry.
		</p>
		<p class="about__text">
			By allowing users to view and post jobs for free, this site is meant to be used not only by large scale marijuana growers and corporations but by small scale farmers, businesses and employees alike.
		</p>
		<p class="about__text">
			We sincerely hope you enjoy this service, and thank you for your participation in the TrimmerWork Community.
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
	.about {
		min-height: 475px;
		&__text {
			font-size: 16px;
		}
	}
</style>