class Run < ApplicationRecord
    belongs_to :user 
    validates :distance, presence: true
    
    def self.longest_run 
        self.all.max_by do |run| 
            run.total_time
        end
    end
    def self.search(hr) 
        self.where('average_heartrate > ?', hr)
    end
end
