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
    sugar_amount = params["sugar_amount"]

    food = Food.find_or_create_by(name: food_name, sugar_amount: sugar_amount )

    respond_to do |format|
      format.json { render :json => food }
    end
  end

  def show

  end

  def destroy
  end

end
