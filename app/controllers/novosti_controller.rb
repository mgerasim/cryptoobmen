class NovostiController < ApplicationController
  skip_before_action :require_login
  def index
  	@novosti = News.all
  	if params[:id]
  		@news = News.find(params[:id])
  	else
  		@news = News.first
  	end
  end

end
