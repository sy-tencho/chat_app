Rails.application.routes.draw do
  devise_for :users, module: :users
  namespace :api do
    resources :messages
  end
  root 'messages#index'
end
