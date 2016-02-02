class Task < ActiveRecord::Base
  has_many :sub_tasks
  belongs_to :inhouseprocess
  accepts_nested_attributes_for :sub_tasks, :reject_if => :all_blank, :allow_destroy => true
end
