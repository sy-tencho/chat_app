class ChangeColumnOnFriend < ActiveRecord::Migration
  def up
    change_table :friends do |t|
      t.change :user_id, :string
      t.change :connected_user_id, :string
    end
  end

  def down
    change_table :friends do |t|
      t.change :user_id, :integer
      t.change :connected_user_id, :integer
    end
  end
end
