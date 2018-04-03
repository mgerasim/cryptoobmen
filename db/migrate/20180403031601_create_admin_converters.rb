class CreateAdminConverters < ActiveRecord::Migration[5.1]
  def change
    create_table :admin_converters do |t|
      t.integer :coeff_procent

      t.timestamps
    end
  end
end
