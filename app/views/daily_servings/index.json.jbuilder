json.array!(@daily_servings) do |daily_serving|
  json.extract! daily_serving, :id
  json.url daily_serving_url(daily_serving, format: :json)
end
