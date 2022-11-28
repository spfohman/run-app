class RunSerializer < ActiveModel::Serializer
  attributes :id, :date, :distance, :total_time, :calories, :elevation, :average_heartrate, :fastest_split, :average_pace, :favorite, :user_id
end
