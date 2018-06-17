Rails.application.routes.draw do
  get '/novosti', to: 'novosti#index'

  get 'novosti/show'

  resources :news
  namespace :api do
    namespace :v1 do
      post 'orders/create'
      get 'orders/duration'
      post 'orders/status'
    end
  end

  resources :orders
  resources :obmen
  resources :exchanges
  resources :banks
  resources :cryptocurrencies
  resources :currencies
  namespace :admin do
    resources :converters
  end
  namespace :admin do
    resources :cashes
  end
  get 'welcome/index'
  root 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :admin do
    get 'sessions/new'
    get    '/login',   to: 'sessions#new'
    post   '/login',   to: 'sessions#create'
    delete '/logout',  to: 'sessions#destroy'
  end
end
