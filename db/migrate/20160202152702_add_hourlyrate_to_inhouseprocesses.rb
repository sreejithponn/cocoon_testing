class AddHourlyrateToInhouseprocesses < ActiveRecord::Migration
  def change
    add_column :inhouseprocesses, :hourlyrate, :decimal, :precision => 8, :scale => 2
  end
end
