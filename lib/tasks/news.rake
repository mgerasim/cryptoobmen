require 'net/http'
require 'addressable/uri'

namespace :news do
  desc "TODO"
  task clear: :environment do
  	News.delete_all
  end

  desc "TODO"
  task parser: :environment do
  	url = "https://bits.media/news/"
  	uri = URI.parse(url)
    https = Net::HTTP.new(uri.host, uri.port)
    https.use_ssl = true
    answer = https.get(uri.request_uri).body

    page = Nokogiri::HTML(answer)

    news_links = page.css("li.withdate-news")

    news_links.each{ |link|
    	date_string = link.css("span.date").text
    	url_source = link.css('a').map {|element| element["href"]}
    	title = link.css('a').text

      next if (url_source[0] == nil)
      puts url_source

    	news = News.find_by_url_source(url_source[0])

      puts news.id if news != nil

    	next if (news != nil) 

    	next if url_source[0] == nil

    	#puts url_source[0] if url_source[0] != nil

    	published_at = Date.strptime(date_string, '%d.%m.%y')

    	next if((Date.today - 3) > published_at)

    	puts published_at

    	url = "https://bits.media" + url_source[0]

    	uri = URI.parse(url)
	   	https = Net::HTTP.new(uri.host, uri.port)
	    https.use_ssl = true
	    answer = https.get(uri.request_uri).body

	    page = Nokogiri::HTML(answer)

	    text_content = page.css("div.text_content")[0]

	    text_content.css('div.article_footer').remove if text_content.css('div.article_footer') != nil

	    news_body = ""
	    text_content.css('p').each{ |p|
	    	news_body += p.to_html

	    }

	    news_new = News.new

	    news_new.title = title
	    news_new.published_at = published_at
	    news_new.url_source = url_source[0]
	    news_new.body = news_body

	    news_new.save

    }

    
  end

end
