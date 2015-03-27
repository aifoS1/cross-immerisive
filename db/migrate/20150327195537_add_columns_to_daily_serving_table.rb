class AddColumnsToDailyServingTable < ActiveRecord::Migration
  def change
    rename_table :daily_serving_tables, :daily_servings
    add_column :daily_servings, :user_id, :integer
    add_column :daily_servings, :food_id, :integer
    add_column :daily_servings, :day, :date
    add_column :daily_servings, :amount, :decimal

  end
end
