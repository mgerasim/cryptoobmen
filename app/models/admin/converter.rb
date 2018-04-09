class Admin::Converter < ApplicationRecord
  belongs_to :cash_a, class_name: "Admin::Cash"
  belongs_to :cash_b, class_name: "Admin::Cash"
  
  def currency_exchange_display
    if (self.currency_exchange != nil)
        "#{(self.currency_exchange / 10000.000)}"
    else
        ""
    end
  end
  
  def cryptocommission_display
    if (self.cryptocommission != nil)
        "#{(self.cryptocommission / 1000.0)}"
    else
        ""
    end
  end
  
  def source_course_display
    if (self.source_course == 1)
	"exmo.me"
    else 
	if (self.source_course == 2) 
	    "cex.io"
	else
	    "Не определено"
	end
    end
  end
  
end
