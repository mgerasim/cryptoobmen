class AddCashToConverter < ActiveRecord::Migration[5.1]
  def change
    add_reference :admin_converters, :cash_a, foreign_key: {to_table: :admin_cashes }
    add_reference :admin_converters, :cash_b, foreign_key: {to_table: :admin_cashes }
  end
end
