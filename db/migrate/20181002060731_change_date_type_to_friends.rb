class ChangeDateTypeToFriends < ActiveRecord::Migration
  def change
    change_column :friends, :connected_user_id, :integer
  end
end
