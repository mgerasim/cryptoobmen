class AddCoeffburseToExchanges < ActiveRecord::Migration[5.1]
  def change
    add_column :exchanges, :coeffburse, :float
  end
end
