json.extract!(@serving)
  json.extract! :id
  json.extract! :food_id
  json.food_name @serving.food.name
  json.amount @serving.amount
  json.day @serving.day