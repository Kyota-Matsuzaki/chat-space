class AddReferenceToUserGroups < ActiveRecord::Migration[5.0]
  def change
    add_reference :user_groups, :user, foreign_key: true
  end
end
