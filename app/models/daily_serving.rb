class DailyServing < ActiveRecord::Base

 # has_many :foods, :through => :users
 belongs_to :user
 belongs_to :food



end
