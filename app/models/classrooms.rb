class Classrooms < ActiveRecord::Base  
  has_many :courses
  has_many :students
  
  validates :students_id, :courses_id, :entry_at, :presence => true
end