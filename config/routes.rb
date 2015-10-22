Rails.application.routes.draw do
  
  scope '/api' do
    resources :students
    resources :courses
    resources :classrooms
  end
  
  root 'home#index'
  
end
