class AddAccountToBanks < ActiveRecord::Migration[5.1]
  def change
    add_column :banks, :account, :string
    add_column :banks, :personal, :string
  end
end
