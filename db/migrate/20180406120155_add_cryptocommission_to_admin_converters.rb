class AddCryptocommissionToAdminConverters < ActiveRecord::Migration[5.1]
  def change
    add_column :admin_converters, :cryptocommission, :integer
  end
end
