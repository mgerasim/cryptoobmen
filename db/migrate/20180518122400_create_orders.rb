class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
      t.float :value_input
      t.float :value_output
      t.string :currency_input
      t.string :currency_output
      t.string :email
      t.string :fullname
      t.string :input_account
      t.string :output_account
      t.integer :status
      t.boolean :agree

      t.timestamps
    end
  end
end
