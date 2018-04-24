class WelcomeController < ApplicationController
  skip_before_action :require_login
  def index
    @cashes_a = Admin::Converter.all
    @exchanges = Exchange.all
  end
end
