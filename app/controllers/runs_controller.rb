class RunsController < ApplicationController
  before_action :set_run, only: %i[ show update destroy ]

  # GET /runs
  def index
    @runs = Run.all

    render json: @runs
  end

  # GET /runs/1
  def show
    render json: @run
  end

  # POST /runs
  def create
    @run = Run.new(run_params)

    if @run.save
      render json: @run, status: :created, location: @run
    else
      render json: @run.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /runs/1
  def update
    if @run.update(run_params)
      render json: @run
    else
      render json: @run.errors, status: :unprocessable_entity
    end
  end

  # DELETE /runs/1
  def destroy
    @run.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_run
      @run = Run.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def run_params
      params.require(:run).permit(:date, :distance, :total_time, :calories, :elevation, :average_heartrate, :fastest_split, :average_pace, :favorite, :user_id)
    end
end
