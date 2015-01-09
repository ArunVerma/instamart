class Department < ActiveRecord::Base
  belongs_to :store
  has_many :aisles
  has_many :items, through: :aisles, source: :item
end
