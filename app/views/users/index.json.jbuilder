json.array!(@users) do |user|
  json.extract! user, :id, :zone_id, :fname, :lname, :email, :phone, :password_digest, :session_token, :img_url
  json.url user_url(user, format: :json)
end
