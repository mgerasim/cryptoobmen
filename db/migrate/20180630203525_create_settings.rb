class CreateSettings < ActiveRecord::Migration[5.1]
  def change
    create_table :settings do |t|
      t.text :pravila_obmena
      t.text :contact
      t.text :about

      t.timestamps
    end
    Setting.new.save
  end
end
