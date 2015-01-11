# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

require 'csv'

CSV.foreach(Rails.root.join("db/seed_data/zones.csv"), headers: true) do |row|
  zone = Zone.new(
    name: row[1],
    zipcodes: row[2]
  )

  zone.id = row[0]
  zone.save!
end

CSV.foreach(Rails.root.join("db/seed_data/stores.csv"), headers: true) do |row|
  store = Store.new(
    zone_id: row[1],
    name: row[2],
    street: row[3],
    city: row[4],
    state: row[5],
    zipcode: row[6],
    img_url: row[7]
  )

  store.id = row[0]
  store.save!
end

CSV.foreach(Rails.root.join("db/seed_data/departments.csv"), headers: true) do |row|
  dept = Department.new(
    store_id: row[1],
    name: row[2]
  )

  dept.id = row[0]
  dept.save!
end

CSV.foreach(Rails.root.join("db/seed_data/aisles.csv"), headers: true) do |row|
  aisle = Aisle.new(
    dept_id: row[1],
    name: row[2]
  )

  aisle.id = row[0]
  aisle.save!
end

CSV.foreach(Rails.root.join("db/seed_data/items.csv"), headers: true) do |row|
  item = Item.new(
    aisle_id: row[1],
    name: row[2],
    brand: row[3],
    price: row[4],
    size: row[5],
    type: row[6],
    sale_pct: row[7],
    img_url: row[8]
  )

  item.id = row[0]
  item.save!
end
