class FoodsController < ApplicationController

  def index

    foods = Food.all

    respond_to do |format|

      format.json { render :json => foods }
    end

  end

  def update

  end

  def create
    binding.pry

  end

  def show

  end

  def destroy
  end

end
