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
    Pry.start(binding)
    food_name = params["name"]
    serving = params["amount"].to_i
    sugar_amount = params["sugar_amount"]
  
    total_sugar = serving * sugar_amount

    food = Food.new(name: food_name, sugar_amount: sugar_amount )
    if food.save
      current_user.servings.create(
         food_id: food.id,
         day: Date.today,
         amount: total_sugar )
      end

    render :new
   
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
