<template>
	<form class="job-post-submit" method="POST" action="https://api.staticman.net/v2/entry/asaldivar/trimmerwork/master/jobs">
		<input type="hidden" name="fields[companyName]" :value="jobForm['companyName']">
		<input type="hidden" name="fields[jobTitle]" :value="jobForm['jobTitle']">
		<input type="hidden" name="fields[jobDescription]" :value="jobForm['jobDescription']">
		<input type="hidden" name="fields[jobLocation]" :value="jobForm['jobLocation']">
		<input type="hidden" name="fields[jobCompensation]" :value="jobForm['jobCompensation']">
		<input type="hidden" name="fields[jobCategory]" :value="jobForm['jobCategory']">
		<input type="hidden" name="fields[jobType]" :value="jobForm['jobType']">
		<input type="hidden" name="fields[companyWebsite]" :value="jobForm['companyWebsite']">
		<input type="hidden" name="fields[jobAccommodations]" :value="jobForm['jobAccommodations']">
		<input type="hidden" name="fields[jobApplication]" :value="jobForm['jobApplication']">
		<input type="hidden" name="fields[image]" :value="jobForm['image']">
		<input type="hidden" name="fields[jobIsFeatured]" :value="jobForm['jobIsFeatured']">
		<TWHeadSmall></TWHeadSmall>
		<job-form-phase :step="'submit'"></job-form-phase>
		<h5 class="col-md-12">STRIPE GOES HERE! :)</h5>
	  <div class="checkbox col-md-12">
	    <label>
	      <input type="checkbox" v-model="disabled" value="true"> I agree and understand that this resume will be posted publicly on TrimmerWork.com so that employers can find (and hire!) me.
	    </label>
	  </div>
		<div class="text-center">
			<button type="submit" class="btn btn-info job-post-submit__button" :disabled="!disabled">
				Approve!
			</button>
		</div>
	</form>
</template>

<script>
	import TWHeadSmall from '@/components/HeadSmall/HeadSmall'
	import JobFormPhase from '@/components/JobFormPhase/JobFormPhase'

	export default {
		components: {
			TWHeadSmall,
			JobFormPhase
		},
		data() {
			return {
				jobForm: this.$store.getters.jobFormApplication,
				disabled: false,
				isSubmitted: false
			}
		}
	}
</script>

<style lang="scss">
	.job-post-submit {
		padding-bottom: 50px;
		&__button {
			background-color: #4fc08d;
			border-color: #4fc08d;
			&:hover, &:focus {
				background-color: #4fc08d;
				border-color: #4fc08d;
			}
		}
	}
</style>