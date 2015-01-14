Rails.application.routes.draw do

  resources :users,         defaults: {format: :json}
  resource :session,        defaults: {format: :json}

  root to: 'root#root'

  resources :stores,        defaults: {format: :json}
  resources :items,         defaults: {format: :json}
  resources :aisles,        defaults: {format: :json}
  resources :departments,   defaults: {format: :json}
  resources :zones,         defaults: {format: :json}
  resources :cart_items,    defaults: {format: :json}
  resources :carts,         defaults: {format: :json}
  resources :order_items,   defaults: {format: :json}
  resources :orders,        defaults: {format: :json}
  resources :credit_cards,  defaults: {format: :json}
  resources :addresses,     defaults: {format: :json}

end
