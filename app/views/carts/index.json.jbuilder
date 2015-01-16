json.array!(@carts) do |cart|
  json.extract! cart, :id, :user_id, :subtotal
  json.url cart_url(cart, format: :json)

  json.items cart.items do |item|
    json.extract! item, :id, :aisle_id, :name, :brand, :price, :size, :product_type, :sale_pct, :img_url, :qty
  end
end
