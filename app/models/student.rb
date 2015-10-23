class Student < ActiveRecord::Base

  has_many :classrooms, :dependent => :destroy

  validates :name, :register_number, :status, :presence => true

  scope :active, lambda { | status |
    where("status = 0")    
  }  
end
