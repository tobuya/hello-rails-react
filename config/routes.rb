Rails.application.routes.draw do
  root 'static_pages#home'

  namespace :api do
    resources :greetings
end
end
