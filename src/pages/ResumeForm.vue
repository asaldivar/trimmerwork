<template>
	<form id="resume-form" class="resume-form" method="POST" action="https://api.staticman.net/v2/entry/asaldivar/trimmerwork/master/resumes" @submit.prevent="validateBeforeSubmit">
		<input type="hidden" name="options[redirect]" value="https://trimmerwork.com/submission-thank-you">
		<TWHeadSmall></TWHeadSmall>
		<back-to-jobs></back-to-jobs>
		<div class="col-md-12">
			<h1>Submit your resume</h1>
			<h4 class="help-block">Let the cannabis community know you're ready to work!</h4>
		</div>
		<div class="col-md-12 resume-form__about-you">
			<fieldset>
				<legend>About you</legend>
				<div class="col-md-8">
					<div
						class="form-group"
						:class="{'has-error':errors.has('fields[name]')}">
						<label class="control-label" for="name">Name</label>
						<input
							type="text"
							name="fields[name]"
							id="name"
							class="form-control"
							placeholder="Alex Smith"
							data-vv-as="name"
							v-model="resume['name']"
							v-validate="'required'">
						<span v-show="errors.has('fields[name]')" class="help-block">{{ errors.first('fields[name]') }}</span>
					</div>
					<div
						class="form-group"
						:class="{'has-error':errors.has('fields[poster_email]')}">
						<label class="control-label" for="poster_email">Email</label>
						<input
							type="text"
							name="fields[poster_email]"
							id="poster_email"
							class="form-control"
							placeholder="asmith@gmail.com"
							v-model="resume['poster_email']"
							data-vv-as="email"
							v-validate="'required'">
						<span v-show="errors.has('fields[poster_email]')" class="help-block">{{ errors.first('fields[poster_email]') }}</span>
					</div>
					<div
						class="form-group"
						:class="{'has-error':errors.has('fields[location]')}">
						<label class="control-label" for="location">Location</label>
						<input
							type="text"
							name="fields[location]"
							id="location"
							class="form-control"
							placeholder="Los Angeles, CA"
							v-model="resume['location']"
							data-vv-as="location"
							v-validate="'required'">
						<span v-show="errors.has('fields[location]')" class="help-block">{{ errors.first('fields[location]') }}</span>
					</div>
				</div>
<!-- 				<div class="col-md-4">
					<label class="resume-form__about-you__avatar">Profile picture</label>
					<photo-upload></photo-upload>
				</div> -->
			</fieldset>
		</div>
		<div class="col-md-12 resume-form__resume">
			<fieldset>
				<legend>Resume</legend>
				<div
					class="form-group col-md-6 resume-form__resume__job-title"
					:class="{'has-error':errors.has('fields[title]')}">
					<label class="control-label" for="title">Job title</label>
					<input
						type="text"
						name="fields[title]"
						id="title"
						class="form-control"
						placeholder="Budtender"
						v-model="resume['title']"
						data-vv-as="job title"
						v-validate="'required'">
					<span v-show="errors.has('fields[title]')" class="help-block">{{ errors.first('fields[title]') }}</span>
				</div>
				<div class="form-group col-md-6 resume-form__resume__job-category">
					<label for="jobCategory">Job category</label>
					<select
						class="form-control"
						id="jobCategory"
						name="fields[jobCategory]"
						v-model="resume['jobCategory']">
						<option value="Grow">Grow</option>
						<option value="Harvest">Harvest</option>
						<option value="Sales">Sales</option>
						<option value="Other">Other</option>
					</select>
				</div>
				<div class="form-group">
					<label for="references">References</label>
					<small class="help-block">If requested, could you provide work-related references?</small>
					<div class="radio">
						<label>
					    <input type="radio" name="fields[references]" v-model="resume['references']" value="true">
					    Yes
						</label>
						<label>
					    <input type="radio" name="fields[references]" v-model="resume['references']" value="false" checked>
					    No
						</label>
					</div>
				</div>
				<div
					class="form-group resume-form__resume__cover-letter"
					:class="{'has-error':errors.has('fields[coverLetter]')}">
					<label class="control-label" for="coverLetter">Cover letter</label>
					<small class="help-block">Please introduce yourself as well as describe what makes you stand out from other resumes of the same job type.</small>
					<input type="hidden" name="fields[coverLetter]" :value="resume['coverLetter']">
					<vue-editor
						id="cover-letter"
						name="fields[coverLetter]"
						:editorToolbar="customToolbar"
						v-model="resume['coverLetter']"
						v-validate="'required'"
						data-vv-as="cover letter"></vue-editor>
						<span v-show="errors.has('fields[coverLetter]')" class="help-block">{{ errors.first('fields[coverLetter]') }}</span>
				</div>
				<div
					class="form-group resume-form__resume__work-experience"
					:class="{'has-error':errors.has('fields[experiece]')}">
					<label class="control-label" for="experiece">Work experience</label>
					<small class="help-block">Please provide a few bullet points of the most recent/relevant jobs you’ve held and duration of time you worked there.</small>
					<input type="hidden" name="fields[experience]" :value="resume['experience']">
					<vue-editor
						id="work-experience"
						name="fields[experiece]"
						:editorToolbar="customToolbar"
						v-model="resume['experience']"
						v-validate="'required'"
						row="5"
						data-vv-as="work experience"></vue-editor>
						<span v-show="errors.has('fields[experiece]')" class="help-block">{{ errors.first('fields[experiece]') }}</span>
				</div>
				<div class="form-group resume-form__resume__additional-info">
					<label class="control-label" for="additionalInfo">Additional information</label>
					<small>(optional)</small>
					<small class="help-block">Please provide a few bullet points of the most recent/relevant jobs you’ve held and duration of time you worked there.</small>
					<input type="hidden" name="fields[additionalInfo]" :value="resume['additionalInfo']">
					<vue-editor
						id="additional-info"
						name="additionalInfo"
						:editorToolbar="customToolbar"
						v-model="resume['additionalInfo']"></vue-editor>
				</div>
				<div
					class="form-group"
					:class="{'has-error':errors.has('fields[contact]')}">
					<label class="control-label" for="contact">Contact</label>
					<small class="help-block">How would you like to be contacted by employers?</small>
					<input
						type="text"
						name="fields[contact]"
						id="contact"
						class="form-control"
						placeholder="asmith@gmail.com"
						v-model="resume['contact']"
						data-vv-as="contact information"
						v-validate="'required'">
					<span v-show="errors.has('fields[contact]')" class="help-block">{{ errors.first('fields[contact]') }}</span>
				</div>
			</fieldset>
		</div>
	  <div class="checkbox col-md-12">
	    <label>
	      <input type="checkbox" v-model="disabled" value="true"> I agree and understand that this resume will be posted publicly on TrimmerWork.com so that employers can find (and hire!) me.
	    </label>
	  </div>
		<div class="text-center">
			<i v-if="isSubmitted" class="fa fa-spinner fa-spin"></i>
			<button v-else type="submit" :disabled="!disabled" class="btn btn-info resume-form__button">
				Submit
			</button>
		</div>
	</form>
</template>

<style lang="scss">
	.resume-form {
		&__about-you {
			&__avatar {
				width: 100%;
				text-align: center;
			}
		}
		&__about-you, &__resume {
			margin-top: 20px;
		}
		&__resume {
			&__job-title, &__job-category {
				padding: 0;
			}
			&__job-title {
				@media (min-width: 769px) {
					padding-right: 15px;
					padding-left: 0;
				}
			}
			&__job-category {
				@media (min-width: 769px) {
					padding-right: 0;
					padding-left: 15px;
				}
			}
			&__cover-letter {
				& #quill-container {
					height: 200px
				}
			}
			&__work-experience {}
			&__additional-info {
				& #quill-container {
					height: 120px
				}
			}
		}
		&__button, &__button:hover, &__button:focus {
			margin-top: 25px;
			line-height: 1.4;
			background-color: #4fc08d;
			border-color: #4fc08d;
			text-transform: uppercase;
		}
	}
	.help-block {
		margin-top: 0;
	}
</style>

<script>
	import { VueEditor } from 'vue2-editor'

	import TWHeadSmall from '@/components/HeadSmall/HeadSmall'
	import BackToJobs from '@/components/BackToJobs/BackToJobs'
	import PhotoUpload from '@/components/PhotoUpload/PhotoUpload.vue' // <- stop-gap

	import _ from 'lodash'
	export default {
		components: {
			BackToJobs,
			VueEditor,
			TWHeadSmall,
			PhotoUpload
		},
		data() {
			return {
				resume: {
					jobCategory: 'Sales'
				},
				disabled: false,
				isSubmitted: false,
	      customToolbar: [
	        ['bold', 'italic', 'underline'],
	        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
	        [{'list': 'ordered'}, {'list': 'bullet'}],
	        [{ 'align': [] }],
	        ['clean']
	      ]
			}
		},
		methods: {
			validateBeforeSubmit: _.debounce(function() {
				this.$validator.validateAll().then((result) => {
					if (result) {
						this.isSubmitted = true
						return document.querySelector('#resume-form').submit()
					}
					console.warn('Please fill out all form goodness')
				})
			}, 750)
		}
	}
</script>