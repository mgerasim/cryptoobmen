class AddUrlSourceToNews < ActiveRecord::Migration[5.1]
  def change
    add_column :news, :url_source, :string
    add_index :news, :url_source, unique: true
  end
end
