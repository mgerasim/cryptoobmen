class Order < ApplicationRecord
    default_scope { order(created_at: :desc) }
    def statusname
	if (self.status == 1)
	    "Новая"
	        else
	            
	                if (self.status == 2)
	            	"В работе"
	            	    else
	            	        
	            	            if (self.status == 3)
	            	        	"Выполнена"
	            	        	    else
	            	        	         "Статус не определен"
	            	        	             end
	            	        	                 end
	            	        	                 end
    end
end
