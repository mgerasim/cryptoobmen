require 'test_helper'

class ExchangesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @exchange = exchanges(:one)
  end

  test "should get index" do
    get exchanges_url
    assert_response :success
  end

  test "should get new" do
    get new_exchange_url
    assert_response :success
  end

  test "should create exchange" do
    assert_difference('Exchange.count') do
      post exchanges_url, params: { exchange: { burse: @exchange.burse, course: @exchange.course, cryptocurrency_id: @exchange.cryptocurrency_id, currency_id: @exchange.currency_id } }
    end

    assert_redirected_to exchange_url(Exchange.last)
  end

  test "should show exchange" do
    get exchange_url(@exchange)
    assert_response :success
  end

  test "should get edit" do
    get edit_exchange_url(@exchange)
    assert_response :success
  end

  test "should update exchange" do
    patch exchange_url(@exchange), params: { exchange: { burse: @exchange.burse, course: @exchange.course, cryptocurrency_id: @exchange.cryptocurrency_id, currency_id: @exchange.currency_id } }
    assert_redirected_to exchange_url(@exchange)
  end

  test "should destroy exchange" do
    assert_difference('Exchange.count', -1) do
      delete exchange_url(@exchange)
    end

    assert_redirected_to exchanges_url
  end
end
