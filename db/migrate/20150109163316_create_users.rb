class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.integer :zone_id
      t.string :fname
      t.string :lname
      t.string :email
      t.string :phone
      t.string :password_digest
      t.string :session_token
      t.string :img_url

      t.timestamps
    end
  end
end
