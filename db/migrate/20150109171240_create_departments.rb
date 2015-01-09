class CreateDepartments < ActiveRecord::Migration
  def change
    create_table :departments do |t|
      t.integer :store_id
      t.string :name

      t.timestamps
    end
  end
end
