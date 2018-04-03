require 'test_helper'

class Admin::ConvertersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @admin_converter = admin_converters(:one)
  end

  test "should get index" do
    get admin_converters_url
    assert_response :success
  end

  test "should get new" do
    get new_admin_converter_url
    assert_response :success
  end

  test "should create admin_converter" do
    assert_difference('Admin::Converter.count') do
      post admin_converters_url, params: { admin_converter: { coeff_procent: @admin_converter.coeff_procent } }
    end

    assert_redirected_to admin_converter_url(Admin::Converter.last)
  end

  test "should show admin_converter" do
    get admin_converter_url(@admin_converter)
    assert_response :success
  end

  test "should get edit" do
    get edit_admin_converter_url(@admin_converter)
    assert_response :success
  end

  test "should update admin_converter" do
    patch admin_converter_url(@admin_converter), params: { admin_converter: { coeff_procent: @admin_converter.coeff_procent } }
    assert_redirected_to admin_converter_url(@admin_converter)
  end

  test "should destroy admin_converter" do
    assert_difference('Admin::Converter.count', -1) do
      delete admin_converter_url(@admin_converter)
    end

    assert_redirected_to admin_converters_url
  end
end
