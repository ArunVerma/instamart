class Aisle < ActiveRecord::Base
  belongs_to :department
  has_many :items
end
