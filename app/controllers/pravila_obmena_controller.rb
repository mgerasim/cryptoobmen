class PravilaObmenaController < ApplicationController
  skip_before_action :require_login
  def index
  	@pravila_obmena = Setting.first.pravila_obmena
  end
end
