class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.integer :aisle_id
      t.string :name
      t.string :brand
      t.decimal :price, precision: 10, scale: 2
      t.string :size
      t.string :product_type
      t.string :img_url
      t.decimal :sale_pct, default: 0
      t.integer :qty, default: 0

      t.timestamps
    end
  end
end
