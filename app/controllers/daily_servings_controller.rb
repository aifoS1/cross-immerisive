class DailyServingsController < ApplicationController

  def user_day
    @daily_servings = current_user.servings.where(day: Date.today)
    
    # foods =  user_food.map do |x|
    #   x.food.name
    # end

    respond_to do |format|
      format.json 
    end
  end

  def update


  end

  def destroy
    Pry.start(binding)
    Food.destroy(params["id"].to_i)
    DailyServing.destroy(food_id: params["id"].to_i)
    #when completed send back 

  end

end
