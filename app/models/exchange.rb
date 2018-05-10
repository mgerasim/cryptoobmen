require 'net/http'
require 'addressable/uri'

class Exchange < ApplicationRecord
  belongs_to :currency
  belongs_to :cryptocurrency
  validates :cryptocurrency, uniqueness: { scope: :currency }

  after_save :course_update
  
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

  def course_update
    converter = self
    if (converter.burse == 1) 
      
        url = "https://api.exmo.com/v1/order_book/?pair=#{converter.cryptocurrency.code}_#{converter.currency.code}"
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
	if (hash["#{converter.cryptocurrency.code}_#{converter.currency.code}"] != nil) 
        	course = hash["#{converter.cryptocurrency.code}_#{converter.currency.code}"]["bid_top"]
        end
                 
	converter.update_column(:course, course)
      
      else
        
        url = "https://cex.io/api/convert/#{converter.cryptocurrency.code}/#{converter.currency.code}"
    
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

    def converter
	(self.course + self.course * self.coeffburse * self.coeff / 100.0).to_s
    end
    
    def converter_crypto
	(self.course - self.course * self.coeffburse * self.coeff / 100.0).to_s
    end
    
    def coeffbursetext
	"Комиссия: " + self.coeffburse.to_s
    end

end
