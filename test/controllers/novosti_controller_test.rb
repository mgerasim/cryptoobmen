require 'test_helper'

class NovostiControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get novosti_index_url
    assert_response :success
  end

  test "should get show" do
    get novosti_show_url
    assert_response :success
  end

end
