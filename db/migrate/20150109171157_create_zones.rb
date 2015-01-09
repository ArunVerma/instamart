class CreateZones < ActiveRecord::Migration
  def change
    create_table :zones do |t|
      t.string :name
      t.string :zipcodes

      t.timestamps
    end
  end
end
