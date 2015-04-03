class DailyServingsController < ApplicationController

  def user_day
    @daily_servings = current_user.servings.where(day: Date.today)

    respond_to do |format|
      format.json 
    end
  end

  # def daily_sugar
 
  #   @daily_servings = current_user.servings.where(day: Date.today)
  #   @total_sugar = @daily_servings.sum(:amount)
   
  #   respond_to do |format|
  #     format.html { render "daily" }
  #     format.json 
  #   end
    
  # end

  # def weekly_sugar
  #    @daily_servings = current_user.servings.where(day: 1.week.ago..Date.today)
  #    @total_sugar = @daily_servings.sum(:amount)

  #   respond_to do |format|
  #     format.html { render "weekly" }
  #     format.json 
  #   end
  # end

  # def index
  #   @servings = current_user.servings.where(day: 1.week.ago..Date.today)

  #   respond_to do |f|
  #     f.html { render "index" }
  #     f.json
  #   end
  # end

  def create
    food = Food.find(params[:food_id])
    total_sugar = params[:servings].to_i * food.sugar_amount

    @serving = current_user.servings.create({
       food: food,
       day: Date.today,
       amount: total_sugar
    })


    respond_to do |format|
      format.json
    end 
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

  private

  def food_params
    params.permit(:name, :sugar_amount)
  end

  # def serving_params
  #   params.require(:serving).permit(:amount)
  # end

end
