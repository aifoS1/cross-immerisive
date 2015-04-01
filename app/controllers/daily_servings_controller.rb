class DailyServingsController < ApplicationController

  def user_day
    @daily_servings = current_user.servings.where(day: Date.today)

    respond_to do |format|
      format.json 
    end
  end

  def daily_sugar
    @daily_servings = current_user.servings.where(day: Date.today)
    @total_sugar = @daily_servings.sum(:amount)
   
    respond_to do |format|
      format.html { render "show" }
      format.json 
    end
    
  end

  def weekly_sugar
     @daily_servings = current_user.servings.where(day: 1.week.ago..Date.today)

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
