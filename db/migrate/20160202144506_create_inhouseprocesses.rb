class CreateInhouseprocesses < ActiveRecord::Migration
  def change
    create_table :inhouseprocesses do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
