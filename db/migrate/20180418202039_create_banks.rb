class CreateBanks < ActiveRecord::Migration[5.1]
  def change
    create_table :banks do |t|
      t.string :name
      t.references :currency, foreign_key: true

      t.timestamps
    end
  end
end
