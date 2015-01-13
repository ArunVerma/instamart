json.extract! @department, :id, :store_id, :name, :created_at, :updated_at

json.aisles @department.aisles do |aisle|
  json.extract! aisle, :id, :dept_id, :name
end

json.items @department.items do |item|
  json.extract! item, :id, :aisle_id, :name, :brand, :price, :size, :product_type, :sale_pct, :img_url
end
