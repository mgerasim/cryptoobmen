class RemoveMinexchangeFromCryptocurrency < ActiveRecord::Migration[5.1]
  def change
    remove_column :cryptocurrencies, :minexchange, :integer
  end
end
