class AddMinexchangeAsFloatToCryptocurrency < ActiveRecord::Migration[5.1]
  def change
    add_column :cryptocurrencies, :minexchange, :float
  end
end
