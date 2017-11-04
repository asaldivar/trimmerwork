<template>
	<form class="job-form">
		<TWHeadSmall></TWHeadSmall>
		<back-to-jobs></back-to-jobs>
		<job-form-phase :step="'create'"></job-form-phase>
		<div class="row job-form__company-details">
			<fieldset>
				<legend>Company details</legend>
				<div class="col-md-8">
					<div class="form-group">
						<label for="companyName">Company name</label>
						<input type="text" id="companyName" class="form-control" placeholder="The Company" v-model="jobForm['company_name']">
					</div>
					<div class="form-group">
						<label for="companyEmail">Company email</label>
						<input type="text" id="companyEmail" class="form-control" placeholder="you@company.com" v-model="jobForm['company_email']">
					</div>
					<div class="form-group">
						<label for="companyWebsite">
							Company website
							<small>(optional)</small>
						</label>
						<input type="text" id="companyWebsite" class="form-control" placeholder="http://company.com" v-model="jobForm['company_website']">
					</div>
				</div>
				<div class="col-md-4"></div>
			</fieldset>
		</div>
		<div class="row job-form__job-details">
			<fieldset>
				<legend>Job details</legend>
				<div class="form-group">
					<label for="jobTitle">Job title</label>
					<input type="text" id="jobTitle" class="form-control" placeholder="Trimmer" v-model="jobForm['job_title']">
				</div>
				<div class="form-group">
					<label for="jobLocation">Job location</label>
					<input type="text" id="jobLocation" class="form-control" placeholder="Medford, OR" v-model="jobForm['job_location']">
				</div>
				<div class="form-group col-md-6 job-form__job-details__category">
					<label for="jobCategory">Job category</label>
					<select class="form-control" id="jobCategory" v-model="jobForm['job_category']">
						<option value="Grow">Grow</option>
						<option value="Harvest">Harvest</option>
						<option value="Sales">Sales</option>
						<option value="Other">Other</option>
					</select>
				</div>
				<div class="form-group col-md-6 job-form__job-details__type">
					<label for="jobType">Job Type</label>
					<select class="form-control" id="jobType" v-model="jobForm['job_type']">
						<option value="Full-time">Full-time</option>
						<option value="Part-time" selected>Part-time</option>
						<option value="Seasonal">Seasonal</option>
					</select>
				</div>
				<div class="form-group">
					<label for="jobCompensation">
						Compensation
						<small>(optional but recommended)</small>
					</label>
					<div class="help-block">Job posts listed with pay help both workers and companies more quickly determine if they fit each other's needs.</div>
					<input type="text" id="jobCompensation" class="form-control" placeholder="$20/hr or $175/lb" v-model="jobForm['job_compensation']">
				</div>
				<div class="form-group">
					<label for="jobDescription">Job description</label>
					<vue-editor class="job-form__job-details__description" :editorToolbar="customToolbar" v-model="jobForm['job_description']"></vue-editor>
				</div>
				<div class="form-group" v-show="jobForm['job_category'] === 'Grow' || jobForm['job_category'] ===  'Harvest'">
					<label for="">Accommodations</label>
					<div class="help-block">Will you be providing any type of accommodations? If so, be sure to detail in job description.</div>
					<div class="radio">
						<label>
					    <input type="radio" value="true" checked v-model="jobForm['job_accommodations']">
					    Yes
						</label>
						<label>
					    <input type="radio"  value="false" v-model="jobForm['job_accommodations']">
					    No
						</label>
					</div>
				</div>
				<div class="form-group">
					<label for="jobApplication">How to apply</label>
					<textarea id="jobApplication" class="form-control" cols="30" rows="3" placeholder="e.g. Please email all applications to hr@company.com" v-model="jobForm['job_application']"></textarea>
				</div>
			</fieldset>
		</div>
		<div class="row job-form__featured-post">
			<fieldset>
				<legend>Make your post stand out!</legend>
				<div class="col-md-6">
					<h5 class="job-form__featured-post__description">
						For only <strong>$25</strong> you can feature your post. Featured posts will be brought to the top of the list and highlighted yellow so they stand out against others!
					</h5>
					<div class="checkbox">
						<label for="jobFeatured">
							<input id="jobFeatured" type="checkbox" v-model="jobForm['jobIsFeatured']">
							Yes, feature my post.
						</label>
					</div>
				</div>
				<div class="col-md-6 job-form__featured-post__image"></div>
			</fieldset>
		</div>
		<div class="text-center">
			<button type="button" class="btn btn-info job-form__button" @click="setJobFormState">
				Preview Your Post
			</button>
		</div>
	</form>
</template>

<script>
	import { VueEditor } from 'vue2-editor'
	import BackToJobs from '@/components/BackToJobs/BackToJobs'
	import TWHeadSmall from '@/components/HeadSmall/HeadSmall'
	import JobFormPhase from '@/components/JobFormPhase/JobFormPhase'

	export default {
		components: {
			BackToJobs,
			VueEditor,
			TWHeadSmall,
			JobFormPhase
		},
		data() {
			return {
	      customToolbar: [
	        ['bold', 'italic', 'underline'],
	        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
	        [{'list': 'ordered'}, {'list': 'bullet'}],
	        [{ 'align': [] }],
	        ['clean']
	      ]
			}
		},
		computed: {
			jobForm() {
				return this.$store.getters.jobFormApplication
			}
		},
		methods: {
			setJobFormState() {
				this.$store.commit('setJobFormState', this.jobForm)
				this.$router.push('/job-post-preview')
			}
		}
	}
</script>

<style lang="scss" src="./JobForm.scss" scoped></style>