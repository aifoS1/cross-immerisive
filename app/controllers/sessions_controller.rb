class SessionsController < ApplicationController
  before_action :require_current_user, only: :destroy

  def welcome


  end

  def new
    # when we use form_for @user, it will infer automatically
    # to try to post to users#create because User.new has not
    # persisted, yet.  We'll need to override this in our form
    if current_user 
      redirect_to root_path 
    end
      @user = User.new
  end

  def create
    # login the user, then redirect to content
    @user = User.find_by(email: session_params[:email])
     
    if @user && @user.authenticate(session_params[:password])
      login!(@user)
      redirect_to root_path
    else
      redirect_to '/users', :method => :create
    end
  end

  def destroy
    logout!
    redirect_to new_session_path

  #   render :json => {
  #   'csrfParam' => request_forgery_protection_token,
  #   'csrfToken' => form_authenticity_token
  # }.to_json
  end

  private

  def session_params
    @session_params ||= params.require(:session).permit(:email, :password)
  end

end
