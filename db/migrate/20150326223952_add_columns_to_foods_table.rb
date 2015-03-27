class AddColumnsToFoodsTable < ActiveRecord::Migration
  def change
    add_column :foods, :sugar_amount, :integer
    add_column :foods, :name, :string
  end
end
