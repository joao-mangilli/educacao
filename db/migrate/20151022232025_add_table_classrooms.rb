class AddTableClassrooms < ActiveRecord::Migration
  def change
    create_table :classrooms do |t|
      t.references :students, null: false, index: true
      t.references :courses, null: false, index: true
      t.datetime :entry_at, null: false
    end
    
    add_foreign_key :classrooms, :students, column: :students_id
    add_foreign_key :classrooms, :courses, column: :courses_id
  end
end