class Group < ApplicationRecord

  validates :name, presence: true

  has_many :messages
  has_many :users, :through => :user_groups
  has_many :user_groups
  accepts_nested_attributes_for :users

end
