class AddLogoToBanks < ActiveRecord::Migration[5.1]
  def change
    add_column :banks, :logo, :attachment
    add_column :banks, :logo_file_name, :string
    add_column :banks, :logo_content_type, :string
    add_column :banks, :logo_file_size, :string
    add_column :banks, :logo_updated_at, :string
  end
end
