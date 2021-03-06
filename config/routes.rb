Rails.application.routes.draw do
  
  devise_for :users
  root "groups#index"
  #resources :users, only: [:edit, :update]
  resources :users, only: [:index, :edit, :update]
  #resources :groups, only: [:index, :new, :create, :edit, :update]
  resources :groups, only: [:index, :new, :create, :edit, :update]  do
    resources :messages, only: [:index, :create]
    namespace :api do
      resources :messages, only: :index, defaults: { format: 'json' }
    end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  end
end
# Rails.application.routes.draw do
#   devise_for :users
#   root 'groups#index'
#   resources :users, only: [:index, :edit, :update]
#   resources :groups, only: [:new, :create, :edit, :update] do
#     resources :messages, only: [:index, :create]
# #追加
#     namespace :api do
#       resources :messages, only: :index, defaults: { format: 'json' }
#     end
#   end
# end