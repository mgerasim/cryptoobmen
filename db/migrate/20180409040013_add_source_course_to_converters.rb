class AddSourceCourseToConverters < ActiveRecord::Migration[5.1]
  def change
    add_column :admin_converters, :source_course, :integer, :default => 1
  end
end
