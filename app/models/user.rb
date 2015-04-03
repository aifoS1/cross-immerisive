class User < ActiveRecord::Base
has_secure_password

validates :name, :email, presence: true

has_many :servings, class_name: "DailyServing"
has_many :foods, :through => :servings

# has_many :consumed_foods, through: :servings, source: :food

# servings.rb
# belongs_to :food

# has_many :favorite_foods, through: :favorites, as: :favorites
# has_many :consumed_foods, through: :daily_servings, as: :daily_servings

 
end
