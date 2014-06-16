require 'test_helper'

class SearchControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get live_search" do
    get :live_search
    assert_response :success
  end

end
