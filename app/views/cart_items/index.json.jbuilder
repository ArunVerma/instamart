json.array!(@cart_items) do |cart_item|
  json.extract! cart_item, :id, :item_id, :cart_id, :qty
  json.url cart_item_url(cart_item, format: :json)
end
