class FoodsController < ApplicationController
 
 def call_api
  
    response = Food.call_api(params["food"])
 
    respond_to do |format|
      format.json { render :json => response }
    end
  end

  def update

  end

  def create
    food_name = params["name"]
    serving = params["amount"].to_i
    sugar_amount = params["sugar_amount"]

    total_sugar = serving * sugar_amount
    Pry.start(binding)
    food = Food.new(name: food_name, sugar_amount: sugar_amount )
     if food.save
      current_user.servings.create(
         food_id: food.id,
         day: Date.today,
         amount: total_sugar )
       end

     render :new
  end

  def show

  end

  def destroy
  end

end
