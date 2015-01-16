json.array!(@items) do |item|
  json.extract! item, :id, :aisle_id, :name, :brand, :price, :size, :product_type, :sale_pct, :img_url, :qty
  json.url item_url(item, format: :json)
end
