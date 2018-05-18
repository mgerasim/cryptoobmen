require 'test_helper'

class ObmenControllerTest < ActionDispatch::IntegrationTest
  setup do
    @obman = obmen(:one)
  end

  test "should get index" do
    get obmen_url
    assert_response :success
  end

  test "should get new" do
    get new_obman_url
    assert_response :success
  end

  test "should create obman" do
    assert_difference('Obman.count') do
      post obmen_url, params: { obman: { agree: @obman.agree, currency_input: @obman.currency_input, currency_output: @obman.currency_output, email: @obman.email, fullname: @obman.fullname, input_account: @obman.input_account, output_account: @obman.output_account, status: @obman.status, value_input: @obman.value_input, value_output: @obman.value_output } }
    end

    assert_redirected_to obman_url(Obman.last)
  end

  test "should show obman" do
    get obman_url(@obman)
    assert_response :success
  end

  test "should get edit" do
    get edit_obman_url(@obman)
    assert_response :success
  end

  test "should update obman" do
    patch obman_url(@obman), params: { obman: { agree: @obman.agree, currency_input: @obman.currency_input, currency_output: @obman.currency_output, email: @obman.email, fullname: @obman.fullname, input_account: @obman.input_account, output_account: @obman.output_account, status: @obman.status, value_input: @obman.value_input, value_output: @obman.value_output } }
    assert_redirected_to obman_url(@obman)
  end

  test "should destroy obman" do
    assert_difference('Obman.count', -1) do
      delete obman_url(@obman)
    end

    assert_redirected_to obmen_url
  end
end
