class RemoveCurrencyExchangeFromAdminConvert < ActiveRecord::Migration[5.1]
  def change
    remove_column :admin_converters, :currency_exchange
  end

end
