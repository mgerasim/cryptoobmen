class AddCoeffToExchanges < ActiveRecord::Migration[5.1]
  def change
    add_column :exchanges, :coeff, :integer
  end
end
