class WelcomeController < ApplicationController
  skip_before_action :require_login
  def index
    @cashes_a = Admin::Converter.all.select(:cash_a_id).distinct
    puts @cashes_a.count
  end
end
