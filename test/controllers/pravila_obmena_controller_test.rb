require 'test_helper'

class PravilaObmenaControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get pravila_obmena_index_url
    assert_response :success
  end

end
