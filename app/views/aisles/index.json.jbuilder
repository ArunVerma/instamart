json.array!(@aisles) do |aisle|
  json.extract! aisle, :id, :dept_id, :name
  json.url aisle_url(aisle, format: :json)

  json.items aisle.items do |item|
    json.extract! item, :id, :aisle_id, :name, :brand, :price, :size, :product_type, :sale_pct, :img_url, :qty
  end
end
