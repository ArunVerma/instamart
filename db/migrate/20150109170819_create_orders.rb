class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.integer :user_id
      t.integer :timeslot_id
      t.string :status
      t.decimal :subtotal

      t.timestamps
    end
  end
end
