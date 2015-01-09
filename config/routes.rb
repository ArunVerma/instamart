Rails.application.routes.draw do
  resources :stores

  resources :items

  resources :aisles

  resources :departments

  resources :zones

  resources :cart_items

  resources :carts

  resources :order_items

  resources :orders

  resources :credit_cards

  resources :addresses

  resources :users

  resource :session

  root to: 'root#root'
end
