json.array!(@zones) do |zone|
  json.extract! zone, :id, :name, :zipcodes
  json.url zone_url(zone, format: :json)
end
