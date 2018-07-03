class ContactController < ApplicationController
  skip_before_action :require_login
  def index
  	@contact = Setting.first.contact
  end
end
