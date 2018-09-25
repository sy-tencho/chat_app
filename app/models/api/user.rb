class Api::User < ActiveRecord::Base
    def self.search(search)
        if search
          where(['username LIKE ?', "%#{search}%"])
        else
        end
    end
end
