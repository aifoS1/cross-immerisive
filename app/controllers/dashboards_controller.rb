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

  def create
    food_name = params["name"]
    serving = params["amount"]
    sugar_amount = params["sugar_amount"]

   food = Food.new(name: food_name, sugar_amount: sugar_amount )
   if food.save
    current_user.servings.create(
       food_id: food.id,
       day: Date.today,
       amount: serving )
     end

     render :new

  end

end
