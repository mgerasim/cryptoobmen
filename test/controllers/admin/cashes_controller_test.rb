require 'test_helper'

class Admin::CashesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @admin_cash = admin_cashes(:one)
  end

  test "should get index" do
    get admin_cashes_url
    assert_response :success
  end

  test "should get new" do
    get new_admin_cash_url
    assert_response :success
  end

  test "should create admin_cash" do
    assert_difference('Admin::Cash.count') do
      post admin_cashes_url, params: { admin_cash: { category: @admin_cash.category, code: @admin_cash.code, icon: @admin_cash.icon, name: @admin_cash.name } }
    end

    assert_redirected_to admin_cash_url(Admin::Cash.last)
  end

  test "should show admin_cash" do
    get admin_cash_url(@admin_cash)
    assert_response :success
  end

  test "should get edit" do
    get edit_admin_cash_url(@admin_cash)
    assert_response :success
  end

  test "should update admin_cash" do
    patch admin_cash_url(@admin_cash), params: { admin_cash: { category: @admin_cash.category, code: @admin_cash.code, icon: @admin_cash.icon, name: @admin_cash.name } }
    assert_redirected_to admin_cash_url(@admin_cash)
  end

  test "should destroy admin_cash" do
    assert_difference('Admin::Cash.count', -1) do
      delete admin_cash_url(@admin_cash)
    end

    assert_redirected_to admin_cashes_url
  end
end
