class UsersController < ApplicationController

  def user_day
    binding.pry
    user_food = current_user.servings.where(day: Date.today)

    respond_to do |format|
      format.json { render :json => user_food }
    end
  end

  def new

  end


  def update

  end

  def show

  end

  # def add_food
  #    binding.pry
  #   food_name = params["name"]
  #   serving = params["daily_serving"]["amount"]
  #   sugar_amount = params["sugar_amount"]

  #  food = Food.new(name: food_name, sugar_amount: sugar_amount )
  #  if food.save
  #   current_user.servings.create(
  #      food_id: food.id,
  #      day: Date.today,
  #      amount: serving )
  #    end
  #        respond_to do |format|
  #     format.json { render :json => food }
  #   end
  # end

  
end
