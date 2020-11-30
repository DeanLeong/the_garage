class MotorcyclesController < ApplicationController
  
  before_action :set_motorcycle, only: [:show, :update, :destroy]

  #GET /motorcycles
  def index
    @motorcycles = Motorcycle.all

    render json: @motorcycles
  end

  #GET /users/1
  def show
    render json: @motorcycle
  end

  def create
    @motorcycle = Motorcycle.new(motorcycle_params)

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

  def motorcycle_params
    params.require(:motorcycle).permit(:name, :img_url, :user_id)
  end
end
