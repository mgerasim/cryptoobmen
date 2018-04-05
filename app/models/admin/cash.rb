class Admin::Cash < ApplicationRecord
    def category_name
        if self.category == 1
           "Российская валюта"
         else
         if self.category == 2
             "Американская валюта"
        else
        if self.category == 3
            "Критовалюта"
        else
            "Не задан"
        end
        end
        end
    end
end
