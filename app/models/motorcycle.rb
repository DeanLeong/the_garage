class Motorcycle < ApplicationRecord
  belongs_to :user
  has_many :maintenance_notes
end
