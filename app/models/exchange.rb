class Exchange < ApplicationRecord
  belongs_to :currency
  belongs_to :cryptocurrency
  
  def course_display
    if (self.course != nil)
        "#{'%.2f' % self.course}"
    else
        ""
    end
  end

  def burse_display
    if (self.burse == 1)
	"exmo.me"
    else 
	if (self.burse == 2) 
	    "cex.io"
	else
	    "Не определено"
	end
    end
  end


end
