require 'net/http'
require 'addressable/uri'

class Admin::Converter < ApplicationRecord
  belongs_to :cash_a, class_name: "Admin::Cash"
  belongs_to :cash_b, class_name: "Admin::Cash"
  
  attr_accessor :cryptocommission_str
  
  after_save :course_update
  
  def course_display
    if (self.course != nil)
        "#{'%.2f' % self.course}"
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
  
  def course_update
    converter = self
    if (converter.source_course == 1) 
      
        url = "https://api.exmo.com/v1/order_book/?pair=#{converter.cash_a.code}_#{converter.cash_b.code}"
        puts url
        
        uri = URI.parse(url)
        https = Net::HTTP.new(uri.host, uri.port)
        https.use_ssl = true
#	params = Addressable::URI.new
#	params.query_values = {:pair => '#{converter.cash_a.code}_#{converter.cash_b.code}'}
	#answer = https.post(uri.path, params.query).body
	answer = https.get(uri.request_uri).body
	
	# https://bablofil.ru/exmo-api/
	hash = JSON.parse(answer)
	puts answer
	course = 1.0
	if (hash["#{converter.cash_a.code}_#{converter.cash_b.code}"] != nil) 
        	course = hash["#{converter.cash_a.code}_#{converter.cash_b.code}"]["bid_top"]
        end
                 
	converter.update_column(:course, course)
      
      else
        
        url = "https://cex.io/api/convert/#{converter.cash_a.code}/#{converter.cash_b.code}"
    
	uri = URI.parse(url)
	https = Net::HTTP.new(uri.host, uri.port)
        https.use_ssl = true
	params = Addressable::URI.new
	params.query_values = {:amnt => 1}
	answer = https.post(uri.path, params.query).body
	hash = JSON.parse(answer)
	course =  hash['amnt'] 
	
	converter.update_column(:course, course)
	
	
      end

  end
  
  
  
end
