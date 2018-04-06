class AddCurrencyExchangeToAdminConverters < ActiveRecord::Migration[5.1]
  def change
    add_column :admin_converters, :currency_exchange, :integer, :default => 10000
  end
end
