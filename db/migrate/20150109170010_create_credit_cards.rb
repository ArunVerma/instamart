class CreateCreditCards < ActiveRecord::Migration
  def change
    create_table :credit_cards do |t|
      t.integer :user_id
      t.integer :last_four
      t.string :type

      t.timestamps
    end
  end
end
