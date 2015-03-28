class UserController < ApplicationController


  def new

  end


  def update

  end

  def show

  end

  def create
     # binding.pry
    food_name = params["name"]
    serving = params["daily_serving"]["amount"]
    sugar_amount = params["sugar_amount"]

   food = Food.new(name: food_name, sugar_amount: sugar_amount )
   if food.save
    current_user.servings.create(
       food_id: food.id,
       day: Date.today,
       amount: serving )
     end
  end

  
end
