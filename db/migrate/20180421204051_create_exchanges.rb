class CreateExchanges < ActiveRecord::Migration[5.1]
  def change
    create_table :exchanges do |t|
      t.references :currency, foreign_key: true
      t.references :cryptocurrency, foreign_key: true
      t.decimal :course
      t.integer :burse

      t.timestamps
    end
  end
end
