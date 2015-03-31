class AddDefaultToAmountInDailyServings < ActiveRecord::Migration
  def change
    change_column :daily_servings, :amount, :decimal, :default => 1;
  end
end
