json.array!(@aisles) do |aisle|
  json.extract! aisle, :id, :dept_id, :name
  json.url aisle_url(aisle, format: :json)
end
