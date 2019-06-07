Rails.application.routes.draw do
  resources :animals, only: [:index, :show, :create]
end
