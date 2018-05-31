namespace :order do
  desc "TODO"
  task pay: :environment do
  	Order.where(:status => 1).each do |order|
  		d = 1 
  		if Rails.env.production?
      		d = 20
    	end

  		if (order.created_at + d.minutes < DateTime.now) 
  			order.update(:status => 5)
  		end
  	end
  end

end
