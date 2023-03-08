class Message < ApplicationRecord
    validates :name, :email, :company, :message_subject, :message_contents, presence: true
end
