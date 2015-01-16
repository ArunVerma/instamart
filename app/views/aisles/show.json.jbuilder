json.extract! @aisle, :id, :dept_id, :name, :created_at, :updated_at

json.items @aisle.items do |item|
  json.extract! item, :id, :aisle_id, :name, :brand, :price, :size, :product_type, :sale_pct, :img_url, :qty
end
