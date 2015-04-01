json.array!(@daily_servings) do |daily_serving|
  json.extract! daily_serving, :amount
end