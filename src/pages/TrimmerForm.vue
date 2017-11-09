<template>
	<form id="trimmer-form" class="trimmer-form" @submit.prevent="validateBeforeSubmit">
		<TWHeadSmall></TWHeadSmall>
		<back-to-jobs></back-to-jobs>
		<div class="col-md-12">
			<h1>Submit your resume</h1>
			<h4 class="help-block">Let the community know you're ready to trim!</h4>
		</div>
		<div class="col-md-12 trimmer-form__about-you">
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
							v-model="fields['name']"
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
							v-model="fields['email']"
							v-validate="'required'">
						<span v-show="errors.has('email')" class="help-block">{{ errors.first('name') }}</span>
					</div>
					<div
						class="form-group"
						:class="{'has-error':errors.has('location')}">
						<label class="control-label" for="location">Location</label>
						<input
							type="text"
							name="location"
							id="location"
							class="form-control"
							placeholder="Ashland, OR"
							v-model="fields['location']"
							v-validate="'required'">
						<span v-show="errors.has('location')" class="help-block">{{ errors.first('location') }}</span>
					</div>
				</div>
				<div class="col-md-4">
					<label class="trimmer-form__about-you__avatar">Profile picture</label>
					<photo-upload></photo-upload>
				</div>
			</fieldset>
		</div>
		<div class="col-md-12 trimmer-form__resume">
			<fieldset>
				<legend>Trimmer resume</legend>
				<div class="form-group col-md-6 trimmer-form__resume__skill-level"
					:class="{'has-error':errors.has('skillLevel')}">
					<label class="control-label" for="skillLevel">Skill level</label>
					<select
						id="skillLevel"
						class="form-control"
						name="skillLevel"
						v-validate="'required'"
						v-model="fields['skillLevel']"
						data-vv-as="skill level">
						<option value="Entry">Entry</option>
						<option value="Mid">Mid</option>
						<option value="Senior">Senior</option>
					</select>
				</div>
				<div class="form-group col-md-6 trimmer-form__resume__work-type">
					<label for="workType">Work type</label>
					<select
						class="form-control"
						id="workType"
						name="workType"
						v-model="fields['workType']">
						<option value="Part-time">Part-time</option>
						<option value="Full-time">Full-time</option>
						<option value="Seasonal">Seasonal</option>
					</select>
				</div>
			</fieldset>
			<div class="form-group">
				<label for="accommodations">Accommodations</label>
				<small class="help-block">Do you need accommodations of any sort (e.g. shelter, food, etc.)? If so, please detail in cover letter.</small>
				<div class="radio">
					<label>
				    <input type="radio" name="accommodations" v-model="fields['accommodations']" value="true">
				    Yes
					</label>
					<label>
				    <input type="radio" name="accommodations" v-model="fields['accommodations']" value="false" checked>
				    No
					</label>
				</div>
			</div>
			<div
				class="form-group"
				:class="{'has-error':errors.has('coverLetter')}">
				<label class="control-label" for="coverLetter">Cover letter</label>
				<small class="help-block">Please describe your qualifications, any accommodations desired, timeframe you are available to work and anything else you deem appropriate.</small>
				<vue-editor
					name="coverLetter"
					:editorToolbar="customToolbar"
					v-model="fields['coverLetter']"
					v-validate="'required'"
					data-vv-as="cover letter"></vue-editor>
					<span v-show="errors.has('coverLetter')" class="help-block">{{ errors.first('coverLetter') }}</span>
			</div>
			<div class="form-group">
				<label for="certification">Marijuana certification</label>
				<small class="help-block">Do you have any type of marijuana worker/handler certification(s)?</small>
				<div class="radio">
					<label>
				    <input type="radio" name="certification" v-model="fields['certification']" value="true">
				    Yes
					</label>
					<label>
				    <input type="radio" name="certification" v-model="fields['certification']" value="false" checked>
				    No
					</label>
				</div>
			</div>
			<div class="form-group">
				<label for="references">References</label>
				<small class="help-block">If requested, could you provide work-related references?</small>
				<div class="radio">
					<label>
				    <input type="radio" name="references" v-model="fields['references']" value="true">
				    Yes
					</label>
					<label>
				    <input type="radio" name="references" v-model="fields['references']" value="false" checked>
				    No
					</label>
				</div>
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
					v-model="fields['contact']"
					v-validate="'required'">
				<span v-show="errors.has('contact')" class="help-block">{{ errors.first('contact') }}</span>
			</div>
		</div>
		<div class="text-center">
			<button type="submit" class="btn btn-info trimmer-form__button">
				Submit
			</button>
		</div>
	</form>
</template>

<style lang="scss">
	.trimmer-form {
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
			&__skill-level, &__work-type {
				padding: 0;
			}
			&__skill-level {
				@media (min-width: 769px) {
					padding-right: 15px;
					padding-left: 0;
				}
			}
			&__work-type {
				@media (min-width: 769px) {
					padding-right: 0;
					padding-left: 15px;
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
	import PhotoUpload from '@/components/PhotoUpload/PhotoUpload'

	export default {
		components: {
			BackToJobs,
			VueEditor,
			TWHeadSmall,
			PhotoUpload
		},
		data() {
			return {
				trimmer: {
					skillLevel: 'Entry',
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
						return document.querySelector('#trimmer-form').submit()
					}
					console.warn('Please fill out all form goodness')
				})
			}
		}
	}
</script>