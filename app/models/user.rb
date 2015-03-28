class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

has_many :servings, class_name: "DailyServing"
has_many :consumed_foods, through: :servings, source: :food

# servings.rb
# belongs_to :food

# has_many :favorite_foods, through: :favorites, as: :favorites
# has_many :consumed_foods, through: :daily_servings, as: :daily_servings

 
end
