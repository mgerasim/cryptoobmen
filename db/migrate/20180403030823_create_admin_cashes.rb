class CreateAdminCashes < ActiveRecord::Migration[5.1]
  def change
    create_table :admin_cashes do |t|
      t.string :code
      t.string :name
      t.string :icon
      t.integer :category

      t.timestamps
    end
  end
end
