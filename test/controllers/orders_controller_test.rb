require 'test_helper'

class OrdersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @order = orders(:one)
  end

  test "should get index" do
    get orders_url
    assert_response :success
  end

  test "should get new" do
    get new_order_url
    assert_response :success
  end

  test "should create order" do
    assert_difference('Order.count') do
      post orders_url, params: { order: { agree: @order.agree, currency_input: @order.currency_input, currency_output: @order.currency_output, email: @order.email, fullname: @order.fullname, input_account: @order.input_account, output_account: @order.output_account, status: @order.status, value_input: @order.value_input, value_output: @order.value_output } }
    end

    assert_redirected_to order_url(Order.last)
  end

  test "should show order" do
    get order_url(@order)
    assert_response :success
  end

  test "should get edit" do
    get edit_order_url(@order)
    assert_response :success
  end

  test "should update order" do
    patch order_url(@order), params: { order: { agree: @order.agree, currency_input: @order.currency_input, currency_output: @order.currency_output, email: @order.email, fullname: @order.fullname, input_account: @order.input_account, output_account: @order.output_account, status: @order.status, value_input: @order.value_input, value_output: @order.value_output } }
    assert_redirected_to order_url(@order)
  end

  test "should destroy order" do
    assert_difference('Order.count', -1) do
      delete order_url(@order)
    end

    assert_redirected_to orders_url
  end
end
