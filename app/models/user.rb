class User < ApplicationRecord
    has_many :runs 
    has_secure_password
    validates :username, presence: true, uniqueness: true
     
    def self.most_runs 
        # self.preload(:runs).max_by do |user|
        #     user.runs.size

        # end
        self.all.max_by do |user| 
            user.runs.size 
        end
        user_runs = self.all.sort_by do |user|
            user.runs.size
        end
        user_runs.last
    end 
    def favoriteRuns 
        runs = user.runs.where(favorite: true)
        
    end 
end
