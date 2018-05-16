class AddCoursedAtToExchange < ActiveRecord::Migration[5.1]
  def change
    add_column :exchanges, :coursed_at, :datetime
  end
end
