class AddLogoToBanks < ActiveRecord::Migration[5.1]

  def self.up
    change_table :banks do |t|
      t.attachment :logo
    end
  end

  def self.down
    remove_attachment :currencies, :logo
  end

end
