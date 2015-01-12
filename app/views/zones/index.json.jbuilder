json.array!(@zones) do |zone|
  json.extract! zone, :id, :name, :zipcodes
  json.url zone_url(zone, format: :json)

  json.stores zone.stores do |store|
    json.extract! store, :id, :zone_id, :name, :street, :city, :state, :zipcode, :img_url
  end
end
