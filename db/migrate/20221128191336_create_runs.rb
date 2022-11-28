class CreateRuns < ActiveRecord::Migration[7.0]
  def change
    create_table :runs do |t|
      t.date :date
      t.float :distance
      t.float :total_time
      t.integer :calories
      t.integer :elevation
      t.integer :average_heartrate
      t.float :fastest_split
      t.float :average_pace
      t.boolean :favorite
      t.integer :user_id

      t.timestamps
    end
  end
end
