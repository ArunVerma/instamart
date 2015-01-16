class CreateAddresses < ActiveRecord::Migration
  def change
    create_table :addresses do |t|
      t.integer :user_id
      t.string :street
      t.string :city
      t.string :state
      t.integer :zipcode, precision: 5

      t.timestamps
    end
  end
end
