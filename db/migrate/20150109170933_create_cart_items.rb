class CreateCartItems < ActiveRecord::Migration
  def change
    create_table :cart_items do |t|
      t.integer :item_id
      t.integer :cart_id
      t.integer :qty, default: 1

      t.timestamps
    end
  end
end
