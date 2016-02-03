CocoonSimpleFormDemo::Application.routes.draw do


  resources :projects
  resources :inhouseprocess, only: :show


  root :to => 'projects#index'


end
