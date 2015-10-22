class StudentsController < ApplicationController

  def index
    render :json => Student.all.order(:name)
  end
  
  def create    
    @student = Student.new(student)
    
    if @student.save
      render :json => @student
    else
      render :json => { erros: @student.errors }, :status => :bad_request
    end
  end
  
  def show
    render :json => Student.find(params[:id])
  end
  
  def update
    @student = Student.find(params[:id])
    
    if @student.update student
      render :json => @student
    else
      render :json => { erros: @student.errors }, :status => :bad_request
    end
  end
  
  def destroy
    @student = Student.find(params[:id])
    
    if @student.delete
      render :json => @student
    else
      render :json => { erros: @student.errors }, :status => :bad_request
    end
  end
  
  private
  
  def student
    params.require(:student).permit(:name, :register_number, :status)
  end
    
end