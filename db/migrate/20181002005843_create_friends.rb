class CreateFriends < ActiveRecord::Migration
  def change
    create_table :friends do |t|
      t.string :user_id
      t.string :connected_user_id

      t.timestamps null: false
    end
  end
end
