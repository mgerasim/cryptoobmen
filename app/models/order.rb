class Order < ApplicationRecord
    default_scope { order(created_at: :desc) }
    def statusname
    	case self.status
    	when 1
    		"Новая"
    	when 2
    		"В работе"
    	when 3
    		"Выполнена"
    	when 4
    		"Оплачен"
    	when 5
    		"Просрочен"
    	else
    		"Статус не определен"
    	end
    end
end
