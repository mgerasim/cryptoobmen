class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  include Admin::SessionsHelper
  before_action :require_login
  private
  def require_login
    Rails.logger.error('test')
    Rails.logger.error(logged_in?)
    if !logged_in?
	flash[:danger] = "Вы должны ввести пароль для входа"
	redirect_to login_path # прерывает цикл запроса
    end
  end
end
