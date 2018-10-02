Rails.application.routes.draw do
  devise_for :users, module: :users
  namespace :api do
    resources :messages, :users
  end
  root 'messages#index'

  get '/users/search', to: 'users#index'
  post '/api/messages', to: 'api/messages#create'
  post 'api/friends', to: 'api/friends#create'
  
end
