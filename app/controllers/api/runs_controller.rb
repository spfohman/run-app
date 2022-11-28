class Api::RunsController < ApplicationController
    
  def index 
      
      if user 
          render json: user.runs.all 
      else
          render json: {error: ["Not authorized"]}, status: :unauthorized 
      end
  end
  
  def show 
      run = user.runs.find_by(id: params[:id])
      if run 
          render json: run 
      else
          render json: {error: "Not found"}, status: :unauthorized 
      end 
  end

  def create  
      run = user.runs.create(run_params)
      if run.valid? 
          render json: run, status: :created 
      else
          render json: {errors: run.errors.full_messages}, status: :unprocessable_entity 
      end
  end

  def update 
      run = user.runs.find_by(id: params[:id])
      if run 
          run.update(run_params)
          render json: run, status: :accepted
      else
          render json: {error: "Not found"}, status: :not_found 
      end 
  end
  
  def destroy  
      run = user.runs.find_by(id: params[:id])
      if run 
          run.destroy
          render json: {success: "Run deleted"} 
      else
          render json: {error: "Run not found."}, status: :not_found 
      end
  end
  
  def fastest_mile
      run = user.runs.minimum(:fastest_split)
      if run 
          
          render json: run, status: :ok 
      else 
          render json: {error: ["Enter some run data to find your fastest mile so far."]}, status: :not_found 
      end
  end
  def longest_run 
      run = Run.longest_run 
      render json: run 
  end
  def find_heartrate 
      runs = Run.search(params[:average_heartrate])
      user_runs = runs.where(user_id: user.id)
      render json: user_runs 
  end
  private 
  def user 
      User.find_by(id: session[:user_id])
  end

  def run_params 
      params.require(:run).permit(:date, :distance, :total_time, :calories, :elevation, :average_heartrate, :average_pace, :fastest_split, :favorite, :user_id)
  end

end


# class RunsController < ApplicationController
#   before_action :set_run, only: %i[ show update destroy ]

#   # GET /runs
#   def index
#     @runs = Run.all

#     render json: @runs
#   end

#   # GET /runs/1
#   def show
#     render json: @run
#   end

#   # POST /runs
#   def create
#     @run = Run.new(run_params)

#     if @run.save
#       render json: @run, status: :created, location: @run
#     else
#       render json: @run.errors, status: :unprocessable_entity
#     end
#   end

#   # PATCH/PUT /runs/1
#   def update
#     if @run.update(run_params)
#       render json: @run
#     else
#       render json: @run.errors, status: :unprocessable_entity
#     end
#   end

#   # DELETE /runs/1
#   def destroy
#     @run.destroy
#   end

#   private
#     # Use callbacks to share common setup or constraints between actions.
#     def set_run
#       @run = Run.find(params[:id])
#     end

#     # Only allow a list of trusted parameters through.
#     def run_params
#       params.require(:run).permit(:date, :distance, :total_time, :calories, :elevation, :average_heartrate, :fastest_split, :average_pace, :favorite, :user_id)
#     end
# end
