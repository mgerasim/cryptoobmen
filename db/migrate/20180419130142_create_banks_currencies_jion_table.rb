class CreateBanksCurrenciesJionTable < ActiveRecord::Migration[5.1]
  def change
    create_join_table :banks, :currencies
  end
end
