class Store < ActiveRecord::Base
  belongs_to :zone
  has_many :departments
  has_many :aisles, through: :departments, source: :aisle
  has_many :items, through: :aisles, source: :item
end
