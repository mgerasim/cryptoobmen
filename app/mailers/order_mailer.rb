class OrderMailer < ApplicationMailer

	def create_order
		@order = params[:order]
	    mail(to: @order.email, subject: 'Вы оформили заказ!')	  
	end

	def status_order
		@order = params[:order]
		mail(to: @order.email, subject: 'Статус заказа №' + @order.id.to_s + ' изменен')
	end

	def success_order
		@order = params[:order]
		mail(to: @order.email, subject: 'Ваш заказ № ' + @order.email + ' успешно Обработан!')
	end
end
