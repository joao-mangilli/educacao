class ClassroomsController < ApplicationController

  def index
    render :json => Classrooms.all.order(:name)
  end
  
  def create    
    @classroom = Classrooms.new(classroom)
    
    if @classroom.save
      render :json => @classroom
    else
      render :json => { erros: @classroom.errors }, :status => :bad_request
    end
  end
  
  def show
    render :json => Classrooms.find(params[:id])
  end
  
  def update
    @classroom = Classrooms.find(params[:id])
    
    if @classroom.update classroom
      render :json => @classroom
    else
      render :json => { erros: @classroom.errors }, :status => :bad_request
    end
  end
  
  def destroy
    @classroom = Classrooms.find(params[:id])
    
    if @classroom.delete
      render :json => @classroom
    else
      render :json => { erros: @classroom.errors }, :status => :bad_request
    end
  end
  
  private
  
  def classroom
    params.require(:classroom).permit(:name, :register_number, :status)
  end
    
end