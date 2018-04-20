class Currency < ApplicationRecord
    has_and_belongs_to_many :banks
    
    has_attached_file :logo, styles: { small: "16x16", med: "32x32", large: "100x100" }
    validates_attachment_content_type :logo, content_type: /\Aimage/
    # Validate filename
    validates_attachment_file_name :logo, matches: [/png\Z/, /jpe?g\Z/, /ico\Z/]

end
