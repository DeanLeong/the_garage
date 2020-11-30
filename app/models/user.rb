class User < ApplicationRecord
  has_many :motorcycles
  has_many :maintenance_notes, through: :motorcycles
end
