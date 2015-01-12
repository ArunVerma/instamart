class Department < ActiveRecord::Base
  belongs_to :store
  has_many :aisles, foreign_key: :dept_id
  has_many :items, through: :aisles, source: :items
end
