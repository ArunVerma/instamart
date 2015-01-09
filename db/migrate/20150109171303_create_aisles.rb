class CreateAisles < ActiveRecord::Migration
  def change
    create_table :aisles do |t|
      t.integer :dept_id
      t.integer :store_id
      t.string :name

      t.timestamps
    end
  end
end
