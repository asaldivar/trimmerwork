<template>
	<form class="job-form" @submit.prevent="validateBeforeSubmit">
		<TWHeadSmall></TWHeadSmall>
		<back-to-jobs></back-to-jobs>
		<job-form-phase :step="'create'"></job-form-phase>
		<div class="col-md-12 job-form__company-details">
			<fieldset>
				<legend>Company details</legend>
				<div class="col-md-8 job-form__company-details__inputs">
					<div
						class="form-group"
						:class="{'has-error':errors.has('fields[companyName]')}">
						<label class="control-label" for="fields[companyName]">Company name</label>
						<input
							type="text"
							name="fields[companyName]"
							id="companyName"
							class="form-control"
							placeholder="The Company"
							v-model="jobForm['companyName']"
							v-validate="'required'"
							data-vv-as="company name">
						<span v-show="errors.has('fields[companyName]')" class="help-block">{{ errors.first('fields[companyName]') }}</span>
					</div>
					<div
						class="form-group"
						:class="{'has-error':errors.has('fields[companyEmail]')}">
						<label class="control-label" for="fields[companyEmail]">Company email</label>
						<input
							type="text"
							name="fields[companyEmail]"
							id="companyEmail"
							class="form-control"
							placeholder="you@company.com"
							v-model="jobForm['companyEmail']"
							v-validate="'required'"
							data-vv-as="company email">
						<span v-show="errors.has('fields[companyEmail]')" class="help-block">{{ errors.first('fields[companyEmail]') }}</span>
					</div>
					<div class="form-group">
						<label for="companyWebsite">
							Company website
						</label>
						<small>(optional)</small>
						<input type="text" id="companyWebsite" class="form-control" placeholder="http://company.com" v-model="jobForm['companyWebsite']">
					</div>
				</div>
<!-- 				<div class="col-md-4">
					<label class="job-form__company-details__inputs__logo-label">Company logo</label>
					<photo-upload :isJobForm="true"></photo-upload>
				</div> -->
			</fieldset>
		</div>
		<div class="col-md-12 job-form__job-details">
			<fieldset>
				<legend>Job details</legend>
				<div
					class="form-group"
					:class="{'has-error':errors.has('jobTitle')}">
					<label class="control-label" for="jobTitle">Job title</label>
					<input
						type="text"
						name="jobTitle"
						id="jobTitle"
						class="form-control"
						placeholder="Trimmer"
						v-model="jobForm['jobTitle']"
						v-validate="'required'"
						data-vv-as="job title">
						<span v-show="errors.has('jobTitle')" class="help-block">{{ errors.first('jobTitle') }}</span>
				</div>
				<div
					class="form-group"
					:class="{'has-error':errors.has('fields[jobLocation]')}">
					<label class="control-label" for="fields[jobLocation]">Job location</label>
					<input
						type="text"
						name="fields[jobLocation]"
						id="jobLocation"
						class="form-control"
						placeholder="Medford, OR"
						v-model="jobForm['jobLocation']"
						v-validate="'required'"
						data-vv-as="job location">
						<span v-show="errors.has('fields[jobLocation]')" class="help-block">{{ errors.first('fields[jobLocation]') }}</span>
				</div>
				<div class="form-group col-md-6 job-form__job-details__category">
					<label for="jobCategory">Job category</label>
					<select class="form-control" id="jobCategory" v-model="jobForm['jobCategory']">
						<option value="Grow">Grow</option>
						<option value="Harvest">Harvest</option>
						<option value="Sales">Sales</option>
						<option value="Other">Other</option>
					</select>
				</div>
				<div class="form-group col-md-6 job-form__job-details__type">
					<label for="jobType">Job Type</label>
					<select class="form-control" id="jobType" v-model="jobForm['jobType']">
						<option value="Full-time">Full-time</option>
						<option value="Part-time" selected>Part-time</option>
						<option value="Seasonal">Seasonal</option>
					</select>
				</div>
				<div class="form-group">
					<label for="jobCompensation">
						Compensation
					</label>
					<small>(optional but recommended)</small>
					<div class="help-block">Job posts listed with pay help both workers and companies more quickly determine if they fit each other's needs.</div>
					<input type="text" id="jobCompensation" class="form-control" placeholder="$20/hr or $175/lb" v-model="jobForm['jobCompensation']">
				</div>
				<div
					class="form-group"
					:class="{'has-error':errors.has('jobDescription')}">
					<label class="control-label" for="jobDescription">Job description</label>
					<vue-editor
						class="job-form__job-details__description"
						name="jobDescription"
						:editorToolbar="customToolbar"
						v-model="jobForm['jobDescription']"
						v-validate="'required'"
						data-vv-as="job description"></vue-editor>
						<span v-show="errors.has('jobDescription')" class="help-block">{{ errors.first('jobDescription') }}</span>
				</div>
				<div class="form-group" v-show="jobForm['jobCategory'] === 'Grow' || jobForm['jobCategory'] ===  'Harvest'">
					<label for="">Accommodations</label>
					<div class="help-block">Will you be providing any type of accommodations? If so, be sure to detail in job description.</div>
					<div class="radio">
						<label>
					    <input type="radio" value="true" checked v-model="jobForm['jobAccommodations']">
					    Yes
						</label>
						<label>
					    <input type="radio"  value="false" v-model="jobForm['jobAccommodations']">
					    No
						</label>
					</div>
				</div>
				<div
					class="form-group"
					:class="{'has-error':errors.has('jobApplication')}">
					<label class="control-label" for="jobApplication">How to apply</label>
					<textarea
						name="jobApplication"
						id="jobApplication"
						class="form-control"
						cols="30" rows="3"
						placeholder="e.g. Please email all applications to hr@company.com"
						v-model="jobForm['jobApplication']"
						v-validate="'required'"
						data-vv-as="how to apply"></textarea>
						<span v-show="errors.has('jobApplication')" class="help-block">{{ errors.first('jobApplication') }}</span>
				</div>
			</fieldset>
		</div>
		<div class="col-md-12 job-form__featured-post">
			<fieldset>
				<legend>Make your post stand out!</legend>
				<div class="col-md-6">
					<h5 class="job-form__featured-post__description">
						For only <strong>$25</strong> you can feature your post. Featured posts will be brought to the top of the list and highlighted yellow so they stand out against others!
					</h5>
					<div class="checkbox">
						<label for="jobFeatured">
							<input id="jobFeatured" type="checkbox" name="fields[jobIsFeatured]" v-model="jobForm['jobIsFeatured']">
							Yes, feature my post.
						</label>
					</div>
				</div>
				<div class="col-md-6 job-form__featured-post__image"></div>
			</fieldset>
		</div>
		<div class="text-center">
			<button type="submit" class="btn btn-info job-form__button">
				Preview Your Post
			</button>
		</div>
	</form>
</template>

<script>
	import { VueEditor } from 'vue2-editor'
	import Cookies from 'js-cookie'

	import BackToJobs from '@/components/BackToJobs/BackToJobs'
	import TWHeadSmall from '@/components/HeadSmall/HeadSmall'
	import JobFormPhase from '@/components/JobFormPhase/JobFormPhase'
	import PhotoUpload from '@/components/PhotoUpload/PhotoUpload'

	export default {
		components: {
			BackToJobs,
			VueEditor,
			TWHeadSmall,
			JobFormPhase,
			PhotoUpload
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
			validateBeforeSubmit() {
				this.$validator.validateAll().then((result) => {
					if (result) {
						this.$store.commit('setJobFormState', this.jobForm)
						Cookies.set('trimmerWorkEmail', this.jobForm.companyEmail)
						this.$store.commit('setCookie', this.jobForm.companyEmail)
						this.$router.push('/job-post-preview')
					}
				})
			}
		}
	}
</script>

<style lang="scss" src="./JobForm.scss" scoped></style>