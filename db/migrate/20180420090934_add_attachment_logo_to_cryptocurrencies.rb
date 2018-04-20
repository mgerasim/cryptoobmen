class AddAttachmentLogoToCryptocurrencies < ActiveRecord::Migration[5.1]
  def self.up
    change_table :cryptocurrencies do |t|
      t.attachment :logo
    end
  end

  def self.down
    remove_attachment :cryptocurrencies, :logo
  end
end
