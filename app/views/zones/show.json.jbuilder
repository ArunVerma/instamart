json.extract! @zone, :id, :name, :zipcodes, :created_at, :updated_at

json.stores @zone.stores do |store|
  json.extract! store, :id, :zone_id, :name, :street, :city, :state, :zipcode, :img_url
end
