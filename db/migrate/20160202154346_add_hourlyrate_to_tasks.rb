class AddHourlyrateToTasks < ActiveRecord::Migration
  def change
    add_column :tasks, :hourlyrate, :decimal, :precision => 8, :scale => 2
  end
end
