json.array!(@items) do |item|
  json.extract! item, :id, :dept_id, :aisle_id, :store_id, :name, :brand, :price, :size, :type, :sale_pct, :img_url
  json.url item_url(item, format: :json)
end
