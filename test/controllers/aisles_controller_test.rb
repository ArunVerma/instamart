require 'test_helper'

class AislesControllerTest < ActionController::TestCase
  setup do
    @aisle = aisles(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:aisles)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create aisle" do
    assert_difference('Aisle.count') do
      post :create, aisle: { dept_id: @aisle.dept_id, name: @aisle.name, store_id: @aisle.store_id }
    end

    assert_redirected_to aisle_path(assigns(:aisle))
  end

  test "should show aisle" do
    get :show, id: @aisle
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @aisle
    assert_response :success
  end

  test "should update aisle" do
    patch :update, id: @aisle, aisle: { dept_id: @aisle.dept_id, name: @aisle.name, store_id: @aisle.store_id }
    assert_redirected_to aisle_path(assigns(:aisle))
  end

  test "should destroy aisle" do
    assert_difference('Aisle.count', -1) do
      delete :destroy, id: @aisle
    end

    assert_redirected_to aisles_path
  end
end
