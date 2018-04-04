class Admin::Converter < ApplicationRecord
  belongs_to :cash_a, class_name: "Admin::Cash"
  belongs_to :cash_b, class_name: "Admin::Cash"
end
