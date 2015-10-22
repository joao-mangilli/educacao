class AddTableCourse < ActiveRecord::Migration
  def change
    create_table :courses do |t|
      t.string :name, null: false, :limit => 45
      t.string :description, null: false, :limit => 45
      t.integer :status, null: false
    end
  end
end
