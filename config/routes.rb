Rails.application.routes.draw do
  get '/hello', to: 'application#hello_world'
  namespace :api do
    
    resources :runs, only: [:index, :show, :create, :update, :destroy]
    resources :users
    get '/fastest-mile', to: 'runs#fastest_mile'
    # get '/most-runs', to: 'users#most_runs'
    # get '/most-runs-1', to: 'users#most_runs_1'
    get '/longest-run', to: 'runs#longest_run'
    get '/find-heartrate', to: 'runs#find_heartrate'
    get '/me', to: 'users#show'
    post '/signup', to: 'users#create'
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'

  end
 get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
