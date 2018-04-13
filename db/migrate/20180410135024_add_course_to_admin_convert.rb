class AddCourseToAdminConvert < ActiveRecord::Migration[5.1]
  def change
    add_column :admin_converters, :course, :float
  end
end
