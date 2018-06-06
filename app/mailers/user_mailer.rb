class UserMailer < ApplicationMailer
	default from: 'info@cryptoobmen.net'

	def welcome_email

	    mail(to: "mgerasim@inbox.ru", subject: 'Welcome to My Awesome Site')
	  end

end
