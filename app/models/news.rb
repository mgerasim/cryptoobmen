class News < ApplicationRecord
    default_scope { order(published_at: :desc) }
end
