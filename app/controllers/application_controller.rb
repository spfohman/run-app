class ApplicationController < ActionController::API
    include ActionController::Cookies 
    
    rescue_from ActiveRecord::RecordNotFound, with: :not_found 
    # before_action :authorize 
    def hello_world 
        session[:count] = (session[:count]||0)+1 
        render json: {count: session[:count]}
    end
  private 
  def authorize 
    @current_user = User.find_by(id: session[:user_id])
    render json: {error: "Not authorized"}, status: :unauthorized unless @current_user 
  end
  
  def not_found(error)
    render json: {error: error.message}, status: :not_found 
  end
end
