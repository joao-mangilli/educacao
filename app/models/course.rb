class Course < ActiveRecord::Base
  
  has_many :classrooms, :class_name => 'Classrooms', :dependent => :destroy
  
  validates :name, :description, :status, :presence => true  
  
  scope :active, lambda { | status |
    where("status = 0")    
  }
  
end
