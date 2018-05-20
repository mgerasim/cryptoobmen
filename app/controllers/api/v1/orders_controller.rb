class Api::V1::OrdersController < ApplicationController
  skip_before_action :require_login
  def create
    order = Order.new
    order.value_input = params[:value_input]
    order.value_output = params[:value_output]
    order.currency_input = params[:currency_input]
    order.currency_output = params[:currency_output]
    order.email = params[:email]
    order.fullname = params[:fullname]
    order.input_account = params[:input_account]
    order.output_account = params[:output_account]
    order.save
  end
end
