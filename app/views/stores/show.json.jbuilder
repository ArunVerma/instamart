json.extract! @store, :id, :zone_id, :name, :street, :city, :state, :zipcode, :img_url, :created_at, :updated_at

json.departments @store.departments do |department|
  json.extract! department, :id, :store_id, :name
end
