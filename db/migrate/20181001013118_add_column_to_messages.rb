class AddColumnToMessages < ActiveRecord::Migration
  def change
    add_column :messages, :post_user_id, :integer
  end
end
