class AddTimestamps < ActiveRecord::Migration
  def change
    add_column :articles, :created_at, :datetime
    add_column :articles, :updated_at, :datetime

    add_column :owners, :created_at, :datetime
    add_column :owners, :updated_at, :datetime
  end
end
