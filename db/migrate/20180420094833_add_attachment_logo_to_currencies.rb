class AddAttachmentLogoToCurrencies < ActiveRecord::Migration[5.1]
  def self.up
    change_table :currencies do |t|
      t.attachment :logo
    end
  end

  def self.down
    remove_attachment :currencies, :logo
  end
end
