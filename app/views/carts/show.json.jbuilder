json.extract! @cart, :id, :user_id, :subtotal, :created_at, :updated_at

json.items @cart.items do |item|
  json.extract! item, :id, :aisle_id, :name, :brand, :price, :size, :product_type, :sale_pct, :img_url, :qty
end
