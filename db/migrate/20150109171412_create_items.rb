class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.integer :aisle_id
      t.string :name
      t.string :brand
      t.decimal :price
      t.string :size
      t.string :type
      t.decimal :sale_pct
      t.string :img_url

      t.timestamps
    end
  end
end
