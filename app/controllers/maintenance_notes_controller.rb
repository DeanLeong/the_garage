class MaintenanceNotesController < ApplicationController

  before_action :set_maintenance_note, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  def index
    @maintenance_notes = MaintenanceNote.all
    
    render json: @maintenance_notes
  end

  def show
    render json: @maintenance_note
  end

  def create
    @maintenance_note = MaintenanceNote.new(maintenance_note_params)
    @maintenance_note = @motorcycle.maintenance_note(maintenance_note_params)
    if @maintenance_note.save
      render json: @maintenance_note, status: :created
    else
      render json: @maintenance_note.errors, status: :unprocessable_entity
    end
  end

  def update
    if @maintenance_note.update(maintenance_note_params)
      render json: @maintenance_note
    else
      render json: @maintenance_note.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @maintenance_note.destroy
  end

  private

  def set_maintenance_note
    @maintenance_note = MaintenanceNote.find(params[:id])
  end

  def maintenance_note_params
    params.require(:maintenance_note).permit(:maintenance_note).merge(motorcycle_id: :motorcycle_id)
  end
end
