json.array!(@daily_servings) do |daily_serving|
  json.extract! daily_serving, :id
  json.extract! daily_serving, :food_id
  json.extract! daily_serving, :day
  json.extract! daily_serving, :amount
  json.food_name daily_serving.food.name
end

