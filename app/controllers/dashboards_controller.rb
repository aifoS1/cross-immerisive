class DashboardsController < ApplicationController

  def new


  end

  def show

  end

  def call_api

    response = Food.call_api(params["food"])
 
    respond_to do |format|
      format.json { render :json => response }
    end
  end

end
