<template>
	<div class="donate">
		<TWHeadSmall></TWHeadSmall>
		<h3>Donate</h3>
		<p class="donate__text">
			Where other job boards charge a minimum of $29 per job post and don't give visibility to resumes looking for work, TrimmerWork provides all this and for FREE!
		</p>
		<p class="donate__text">
			If you'd like to financially contribute to the TrimmerWork Community it would be greatly appreciated. All donations are used to keep the site up and running as well as fund the development of new features.
		</p>
		<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
		<input type="hidden" name="cmd" value="_s-xclick">
		<input type="hidden" name="hosted_button_id" value="PTN6SRDCVWRZJ">
		<div class="text-center">
			<button class="donate__button" type="submit">
				<i class="fa fa-heart" aria-hidden="true"></i>
				Donate to TrimmerWork
				<i class="fa fa-heart" aria-hidden="true"></i>
			</button>
		</div>
		</form>
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
	.donate {
		min-height: 475px;
		&__text {
			font-size: 16px;
		}
		&__button {
			margin-top: 10px;
			line-height: 1.4;
			padding: 3px 5px;
			color: #4fc08d;
			background-color: #fff;
	    border: 1px solid #4fc08d;
	    border-radius: 3px;
	    transition: 0.2s ease;
	    &:hover {
				background-color: #4fc08d;
				color: #fff;
				& .fa-heart {
					color: #fff
				}
	    }
		}
	}
	.fa-heart {
		margin: 0 3px;
		color: #4fc08d;
	}
</style>