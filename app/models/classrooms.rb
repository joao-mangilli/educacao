class Classrooms < ActiveRecord::Base  
  belongs_to :course
  belongs_to :student
  
  validates :student_id, :course_id, :entry_at, :presence => true
  
  def as_json(options)
    {
      :student => student,
      :course => course,
      :entry_at => entry_at,
      :id => id,
      :student_id => student_id,
      :course_id => course_id
    }
  end
end