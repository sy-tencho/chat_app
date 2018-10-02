class ChangeDateTypeToFriend < ActiveRecord::Migration
  def change
    change_column :friends, :user_id, :integer
  end
end
