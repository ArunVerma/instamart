class SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(params[:user])

    if user.nil?
      head :unprocessable_entity
    else
      sign_in!(@user)
      render :show
    end
  end

  def show
    if current_user
      render :show
    else
      render json: {}
    end
  end

  def destroy
    sign_out!
    render json: {}
  end
end
