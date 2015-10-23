class CoursesController < ApplicationController

  has_scope :active
  
  def index
    render :json => apply_scopes(Course.all).order(:name)
  end
  
  def create    
    @course = Course.new(course)
    
    if @course.save
      render :json => @course
    else
      render :json => { erros: @course.errors }, :status => :bad_request
    end
  end
  
  def show
    render :json => Course.find(params[:id])
  end
  
  def update
    @course = Course.find(params[:id])
    
    if @course.update course
      render :json => @course
    else
      render :json => { erros: @course.errors }, :status => :bad_request
    end
  end
  
  def destroy
    @course = Course.find(params[:id])
    
    if @course.delete
      render :json => @course
    else
      render :json => { erros: @course.errors }, :status => :bad_request
    end
  end
  
  private
  
  def course
    params.require(:course).permit(:name, :description, :status)
  end
  
end
