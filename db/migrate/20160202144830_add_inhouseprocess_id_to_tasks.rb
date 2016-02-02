class AddInhouseprocessIdToTasks < ActiveRecord::Migration
  def change
    add_column :tasks, :inhouseprocess_id, :integer
  end
end
