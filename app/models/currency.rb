class Currency < ApplicationRecord
    has_and_belongs_to_many :banks
end
