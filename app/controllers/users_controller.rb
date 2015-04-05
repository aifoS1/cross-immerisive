class UsersController < ApplicationController

  def new
    @user = User.new
  end


  def update

  end

  def show

  end

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      redirect_to root_path
    else
      render :new
    end
  end

  def edit

    if current_user.id != params[:id].to_i
      redirect_to user_path(current_user)
      @user = current_user
    else
      @user = current_user
   end
 end

 def destroy
    User.find(params[:id]).destroy
    flash[:success] = "User deleted"
    redirect_to new_user_path
end

private


  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end

  def user_is_current_user
    redirect_to new_session_path
  end


  
end
