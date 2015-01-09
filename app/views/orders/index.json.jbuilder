json.array!(@orders) do |order|
  json.extract! order, :id, :user_id, :timeslot_id, :status, :subtotal
  json.url order_url(order, format: :json)
end
