json.array!(@addresses) do |address|
  json.extract! address, :id, :user_id, :street, :city, :state, :zipcode
  json.url address_url(address, format: :json)
end
