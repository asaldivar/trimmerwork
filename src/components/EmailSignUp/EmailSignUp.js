import Cookies from 'js-cookie'
import $ from 'jquery'

import TWHeadSmall from '@/components/HeadSmall/HeadSmall'

export default {
	data: () => {
		return {
			error: null,
			errorMessage: '',
			isSubscribed: false
		}
	},
	props: ['cookie'],
	components: {
		TWHeadSmall
	},
	methods: {
		emailSubmit(e) {
			e.preventDefault()

			const $form = $('#mc-embedded-subscribe-form')
			const $email = $('.email')

			if ($email.val().length) {
				$email.removeClass('mce_inline_error')

		    $.ajax({
	        url: $form.attr('action'),
	        data: $form.serialize(),
	        dataType: 'jsonp',
	        error: function(err) {
	        	alert('Could not connect to the registration server. Please try again later.')
	        },
	        success: data => {
	          if (data.result != 'success') {
	          	if (data.msg.indexOf('already subscribed') != -1) {
		          	Cookies.set('trimmerWorkEmail', $email.val())
		          	this.$store.commit('setCookie', $email.val())
		          } else {
		            this.error = true
		            $email.css('border-color', '#a94442')
		            let message = data.msg.substr(data.msg.indexOf('- ') + 1)

								if (message.indexOf('TrimmerWork. ') !== -1) {
									message = message.substr(0, message.indexOf('TrimmerWork. '))
								}
		            this.errorMessage = message
		          }
	          } else {
	          	Cookies.set('trimmerWorkEmail', $email.val())
	          	this.$store.commit('setCookie', $email.val())
	          	this.isSubscribed = true;
	          }
	        }
		    })
			} else {
				this.error = true
				this.errorMessage = 'Please enter your email address.'
				$email.css('border-color', '#a94442')
			}
		}
	}
}