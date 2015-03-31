class DailyServingsController < ApplicationController

  def user_day
    @daily_servings = current_user.servings.where(day: Date.today)

    respond_to do |format|
      format.json 
    end
  end

  def show
    daily_servings = current_user.servings.where(day: Date.today)
     @total_sugar = daily_servings.sum(:amount)
    
  end

  def update


  end

  def destroy
    # Food.destroy(params["id"].to_i)
    DailyServing.destroy(params["id"].to_i)
    respond_to do |format|
      format.json { render :json => {} }
    end
  end

end
