class MotorcyclesController < ApplicationController
  
  before_action :set_motorcycle, only: :show
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_user_motorcycle, only: [:update, :destroy]

  #GET /motorcycles
  def index
    @motorcycles = Motorcycle.all

    render json: @motorcycles, include: :maintenance_notes, status: :ok
  end

  #GET /users/1
  def show
    render json: @motorcycle, include: :maintenance_notes, status: :ok
  end

  def create
    @motorcycle = Motorcycle.new(motorcycle_params)
    @motorcycle.user = @current_user

    if @motorcycle.save
      render json: @motorcycle, status: :created
    else
      render json: @motorcycle.errors, status: :unprocessable_entity
    end
  end

  def update
    if @motorcycle.update(motorcycle_params)
      render json: @motorcycle
    else
      render json: @motorcycle.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @motorcycle.destroy
  end

  private

  def set_motorcycle
    @motorcycle = Motorcycle.find(params[:id])
  end

  def set_user_motorcycle
    @motorcycle = @current_user.motorcycles.find(params[:id])
  end

  def motorcycle_params
    params.require(:motorcycle).permit(:name, :img_url)
  end
end
