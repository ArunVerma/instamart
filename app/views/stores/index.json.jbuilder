json.array!(@stores) do |store|
  json.extract! store, :id, :zone_id, :name, :street, :city, :state, :zipcode, :img_url
  json.url store_url(store, format: :json)

  json.departments store.departments do |department|
    json.extract! department, :id, :store_id, :name
  end
end
