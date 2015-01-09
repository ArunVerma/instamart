class CreateStores < ActiveRecord::Migration
  def change
    create_table :stores do |t|
      t.integer :zone_id
      t.string :name
      t.string :street
      t.string :city
      t.string :state
      t.integer :zipcode
      t.string :img_url

      t.timestamps
    end
  end
end
