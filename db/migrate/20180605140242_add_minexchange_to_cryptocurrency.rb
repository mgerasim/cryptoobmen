class AddMinexchangeToCryptocurrency < ActiveRecord::Migration[5.1]
  def change
    add_column :cryptocurrencies, :minexchange, :integer
  end
end
