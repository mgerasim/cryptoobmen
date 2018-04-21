class AddUniqueIndexToExchange < ActiveRecord::Migration[5.1]
  def change
    add_index :exchanges, [:cryptocurrency_id, :currency_id], unique: true
  end
end
