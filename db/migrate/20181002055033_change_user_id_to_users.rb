class ChangeUserIdToUsers < ActiveRecord::Migration

  def up
    change_column :Friends, :user_id, :string, null: false
  end

  def down
    change_column :Friends, :user_id, :integer, null: false
  end

end
