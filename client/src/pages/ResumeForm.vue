<template>
	<form class="resume-form" @submit.prevent="validateBeforeSubmit">
		<TWHeadSmall></TWHeadSmall>
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
						:class="{'has-error':errors.has('name')}">
						<label class="control-label" for="name">Name</label>
						<input
							type="text"
							name="name"
							id="name"
							class="form-control"
							placeholder="Alex Smith"
							v-model="resume['name']"
							v-validate="'required'">
						<span v-show="errors.has('name')" class="help-block">{{ errors.first('name') }}</span>
					</div>
					<div
						class="form-group"
						:class="{'has-error':errors.has('email')}">
						<label class="control-label" for="email">Email</label>
						<input
							type="text"
							name="email"
							id="email"
							class="form-control"
							placeholder="asmith@gmail.com"
							v-model="resume['email']"
							v-validate="'required'">
						<span v-show="errors.has('email')" class="help-block">{{ errors.first('name') }}</span>
					</div>
					<div
						class="form-group"
						:class="{'has-error':errors.has('location')}">
						<label class="control-label" for="location">Location</label>
						<small class="help-block">Where do you want to work?</small class="help-block">
						<input
							type="text"
							name="location"
							id="location"
							class="form-control"
							placeholder="Ashland, OR"
							v-model="resume['location']"
							v-validate="'required'">
						<span v-show="errors.has('location')" class="help-block">{{ errors.first('location') }}</span>
					</div>
				</div>
			</fieldset>
		</div>
		<div class="col-md-12 resume-form__resume">
			<fieldset>
				<legend>Resume</legend>
				<div
					class="form-group col-md-6 resume-form__resume__job-title"
					:class="{'has-error':errors.has('title')}">
					<label class="control-label" for="title">Job title</label>
					<input
						type="text"
						name="title"
						id="title"
						class="form-control"
						placeholder="Ashland, OR"
						v-model="resume['title']"
						v-validate="'required'">
					<span v-show="errors.has('title')" class="help-block">{{ errors.first('title') }}</span>
				</div>
				<div class="form-group col-md-6 resume-form__resume__job-category">
					<label for="workType">Work type</label>
					<select
						class="form-control"
						id="workType"
						name="workType"
						v-model="resume['workType']">
						<option value="Part-time">Part-time</option>
						<option value="Full-time">Full-time</option>
						<option value="Seasonal">Seasonal</option>
					</select>
				</div>
				<div class="form-group">
					<label for="references">References</label>
					<small class="help-block">If requested, could you provide work-related references?</small>
					<div class="radio">
						<label>
					    <input type="radio" name="references" v-model="resume['references']" value="true">
					    Yes
						</label>
						<label>
					    <input type="radio" name="references" v-model="resume['references']" value="false" checked>
					    No
						</label>
					</div>
				</div>
				<div
					class="form-group resume-form__resume__cover-letter"
					:class="{'has-error':errors.has('coverLetter')}">
					<label class="control-label" for="coverLetter">Cover letter</label>
					<small class="help-block">Please introduce yourself as well as describe what makes you stand out from other resumes of the same job type.</small>
					<vue-editor
						name="coverLetter"
						:editorToolbar="customToolbar"
						v-model="resume['coverLetter']"
						v-validate="'required'"
						data-vv-as="cover letter"></vue-editor>
						<span v-show="errors.has('coverLetter')" class="help-block">{{ errors.first('coverLetter') }}</span>
				</div>
				<div
					class="form-group resume-form__resume__work-experience"
					:class="{'has-error':errors.has('experiece')}">
					<label class="control-label" for="experiece">Work experience</label>
					<small class="help-block">Please provide a few bullet points of the most recent/relevant jobs you’ve held and duration of time you worked there.</small>
					<vue-editor
						name="experiece"
						:editorToolbar="customToolbar"
						v-model="resume['experiece']"
						v-validate="'required'"
						row="5"
						data-vv-as="work experience"></vue-editor>
						<span v-show="errors.has('experiece')" class="help-block">{{ errors.first('experiece') }}</span>
				</div>
				<div
					class="form-group resume-form__resume__additional-info"
					:class="{'has-error':errors.has('additionalInfo')}">
					<label class="control-label" for="additionalInfo">Additional information</label>
					<small class="help-block">Please provide a few bullet points of the most recent/relevant jobs you’ve held and duration of time you worked there.</small>
					<vue-editor
						name="additionalInfo"
						:editorToolbar="customToolbar"
						v-model="resume['additionalInfo']"></vue-editor>
				</div>
				<div
					class="form-group"
					:class="{'has-error':errors.has('contact')}">
					<label class="control-label" for="contact">Contact</label>
					<small class="help-block">How would you like to be contacted by employers?</small>
					<input
						type="text"
						name="contact"
						id="contact"
						class="form-control"
						placeholder="asmith@gmail.com"
						v-model="resume['contact']"
						v-validate="'required'">
					<span v-show="errors.has('contact')" class="help-block">{{ errors.first('contact') }}</span>
				</div>
			</fieldset>
		</div>
		<div class="text-center">
			<button type="submit" class="btn btn-info resume-form__button">
				Submit
			</button>
		</div>
	</form>
</template>

<style lang="scss">
	.resume-form {
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

	export default {
		components: {
			VueEditor,
			TWHeadSmall,
		},
		data() {
			return {
				resume: {
					workType: 'Seasonal'
				},
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
			validateBeforeSubmit() {
				this.$validator.validateAll().then((result) => {
					if (result) {
						this.$router.push('/donate')
					}
					console.warn('Please fill out all form goodness')
				})
			}
		}
	}
</script>