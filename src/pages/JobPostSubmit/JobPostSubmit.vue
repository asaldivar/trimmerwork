<template>
	<form class="job-post-submit" method="POST" action="https://api.staticman.net/v2/entry/asaldivar/trimmerwork/master/jobs">
		<input type="hidden" name="options[redirect]" value="http://trimmerwork.herokuapp.com/donate">
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


		<div v-if="jobForm['jobIsFeatured']" class="col-md-12">
	    <card class="job-post-submit__stripe-card"
	      :class="{ 'job-post-submit__stripe-card--complete' : complete }"
	      stripe="pk_test_3ltDFsMCMSpl3vLqOr4NjcKM"
	      @change="complete = $event.complete"
	    />
			<div v-if="errorMessage" class="has-error text-center">
				<p class="help-block">There was an issue processing your payment</p>
			</div>
	    <div class="text-center">
	    	Your job post is <strong>free</strong>! You will only be charged $25 for your additional request of featuring your post.
	    </div>
		</div>
	  <div class="checkbox col-md-12 job-post-submit__agreement">
	    <label class="help-block col-md-8 col-md-offset-2 text-center">
	      <input type="checkbox" v-model="disabled" value="true">I am a part of / I represent the hiring company. Details provided in the job post refer to the actual hiring entity.
	    </label>
	  </div>
		<div class="text-center">
    	<button type="button" v-if="jobForm['jobIsFeatured']" class='pay-with-stripe btn' @click='pay' :disabled='!complete || !disabled'>Pay and Submit</button>
			<button v-else type="submit" class="btn btn-info job-post-submit__button" :disabled="!disabled">
				Submit!
			</button>
			<br>
			<span>or</span>
			<br>
			<router-link to="/job-post-preview">
				<small>review your post</small>
			</router-link>
		</div>
	</form>
</template>

<script>
	import axios from 'axios'
	import { Card, createToken } from 'vue-stripe-elements-plus'

	import TWHeadSmall from '@/components/HeadSmall/HeadSmall'
	import JobFormPhase from '@/components/JobFormPhase/JobFormPhase'

	export default {
		components: {
			TWHeadSmall,
			JobFormPhase,
			Card
		},
		data() {
			return {
				jobForm: this.$store.getters.jobFormApplication,
				disabled: false,
				isSubmitted: false,
				complete: false,
				errorMessage: ''
			}
		},
	  methods: {
	    pay () {
	      createToken().then(data => {
					const stripeData = {
						email: 'ag.saldivar@gmail.com',
						token: data.token.id
					}
	      	axios.post('http://localhost:8079/api/payments/charge', stripeData)
	      	.then(response => {
	      		document.querySelector('.job-post-submit').submit()
	      		this.$router.push('/donate')
	      	})
	      	.catch(error => {
	      		this.errorMessage = 'There was an issue processing your payment'
	      	})
	      })
	    }
	  }
	}
</script>

<style lang="scss">
	.job-post-submit {
		padding-bottom: 150px;
		&__stripe-card {
		  width: 300px;
		  margin: 60px auto 20px;
			padding: 10px 12px;
	    border-radius: 4px;
	    border: 1px solid transparent;
	    box-shadow: 0 1px 3px 0 #94999e;
			&--complete {
			  border-color: green;
			}
		}
		&__button, &.disabled {
			background-color: #4fc08d !important;
			border-color: #4fc08d !important;
			&:hover, &:focus {
				background-color: #4fc08d;
				border-color: #4fc08d;
			}
		}
		&__agreement {
			margin-top: 50px;
		}
	}
	.pay-with-stripe {
		line-height: 1.4;
		color: #fff;
		background-color: #4fc08d;
		border-color: #4fc08d;
		text-transform: uppercase;
		&:hover, &:focus {
			color: #fff;
		}
	}
</style>