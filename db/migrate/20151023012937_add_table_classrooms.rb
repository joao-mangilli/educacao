class AddTableClassrooms < ActiveRecord::Migration
  def change
    create_table :classrooms do |t|
      t.references :student, null: false, index: true
      t.references :course, null: false, index: true
      t.datetime :entry_at, null: false
    end
    
    add_foreign_key :classrooms, :students, column: :student_id
    add_foreign_key :classrooms, :courses, column: :course_id
  end
end
